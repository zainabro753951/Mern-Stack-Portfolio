import { blogComment } from "../../Models/blog.model.js";
import { io } from "../../Socket/server.js";

const getAllBlogComments = async (req, res) => {
  try {
    const allComments = await blogComment.find();
    return res.status(200).json(allComments);
  } catch (error) {
    return res.status(500).json("Internal Server Error!");
  }
};

export default getAllBlogComments;
