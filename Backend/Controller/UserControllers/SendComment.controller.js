import {
  blogComment,
  blogModel,
  BlogCommentNotification,
} from "../../Models/blog.model.js";
import { io, adminSocketId } from "../../Socket/server.js";

export let pendingNotifications = [];

export const BlogComment = async (req, res) => {
  try {
    const { blogId, comment } = req.body;
    const userId = req.user._id;

    const newComment = await blogComment.create({
      blogId,
      userId,
      comment,
    });

    const blog = await blogModel.findById(blogId);
    blog.comments.push(newComment._id);
    await blog.save();

    if (!newComment) {
      return res.status(400).json({ message: "Failed to create comment" });
    }

    // Create a notification object
    const notification = await BlogCommentNotification.create({
      message: "A new comment has been posted.",
      commentId: newComment._id,
      userId: userId,
    });

    if (adminSocketId) {
      io.to(adminSocketId).emit("newCommentNotification", {
        message: notification.message,
        comment: newComment,
        notificationId: notification._id, // Include the notification ID
      });
    } else {
      // Store notification for offline admin
      pendingNotifications.push(notification);
    }

    io.emit("newBlogComments", newComment);

    return res
      .status(201)
      .json({ message: "Comment created successfully", newComment });
  } catch (error) {
    return res.status(500).json("Internal Server Error!");
  }
};
