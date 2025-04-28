import { blogLike, blogModel } from "../../Models/blog.model.js";

const getBlogLikes = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blogLikes = await blogModel.find({ _id: blogId }).select("likes");
    console.log(blogLikes);
    res.status(200).json(blogLikes);
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};

export default getBlogLikes;
