import { BlogCommentNotification } from "../../Models/blog.model.js";

const getAllBlogComment = async (req, res) => {
  try {
    const blogPendingComment = await BlogCommentNotification.find({
      isRead: false,
    })
      .sort({
        createdAt: -1,
      })
      .lean() // Convert to plain JS object for faster serialization
      .catch(300); // Cache results for 5 minutes
    return res.status(200).json(blogPendingComment);
  } catch (error) {
    return res.status(500).json("Internal server error!");
  }
};

export default getAllBlogComment;
