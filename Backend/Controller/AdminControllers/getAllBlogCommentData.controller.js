import { blogComment } from "../../Models/blog.model.js";
const getAllBlogCommentData = async (req, res) => {
  try {
    const { commentId, userId } = req.query;

    // Find the comment and populate blogId and userId
    const blogCommentData = await blogComment
      .findOne({ _id: commentId, userId })
      .select("blogId userId comment createdAt _id") // Sirf blogId aur userId select karen
      .populate({
        path: "blogId", // Blog ko populate karen
        select: "_id slug", // Sirf blog ki id aur slug select karen
      })
      .populate({
        path: "userId", // User ko populate karen
        select: "firstName lastName profilePicture email", // Sirf user ki name aur email select karen
      });

    // Agar data nahi mila to error return karen
    if (!blogCommentData) {
      return res.status(404).json({ message: "Comment not found!" });
    }

    // Response send karen
    return res.status(200).json({
      message: "Data fetched successfully!",
      data: blogCommentData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export default getAllBlogCommentData;
