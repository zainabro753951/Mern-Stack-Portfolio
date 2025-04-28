import { BlogCommentNotification } from "../../Models/blog.model.js";

const getAllBlogComment = async (req, res) => {
  try {
    const blogPendingComment = await BlogCommentNotification.find({
      isRead: false,
    }).sort({
      createdAt: -1,
    });
    return res.status(200).json(blogPendingComment);
  } catch (error) {
    return res.status(500).json("Internal server error!");
  }
};

export default getAllBlogComment;
