import { blogModel } from "../../Models/blog.model.js";

const GetBlogData = async (req, res) => {
  try {
    const blogData = await blogModel
      .find({ isDeleted: false })
      .sort({ createdAt: -1 });
    res.status(200).json(blogData);
  } catch (error) {
    console.log("error in geting blog data" + error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default GetBlogData;
