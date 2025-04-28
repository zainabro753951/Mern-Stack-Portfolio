import { blogModel } from "../../Models/blog.model.js";

export const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  console.log(blogId);

  const blog = await blogModel.findOne({ _id: blogId });
  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  blog.isDeleted = true;
  const result = await blog.save();
  res
    .status(200)
    .json({ message: "Blog Deleted Successfully", deletedBlog: result });
};

export const addDraftPost = async (req, res) => {
  const { blogId } = req.params;
  console.log(blogId);

  const blog = await blogModel.findOne({ _id: blogId });
  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  console.log(blog);

  blog.status = false;
  const result = await blog.save();
  res.status(200).json({ message: "Blog Deleted Successfully" });
};
