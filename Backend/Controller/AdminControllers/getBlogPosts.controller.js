import { blogModel } from "../../Models/blog.model.js";

const GetBlogData = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Default page is 1, and limit is 10
    const skip = (page - 1) * limit;
    const blogData = await blogModel
      .find({ isDeleted: false })
      .select(
        "title content author date category tags slug featuredImage description"
      ) // Select only needed fields
      .sort({ createdAt: -1 });
    res.status(200).json(blogData);
  } catch (error) {
    console.log("error in getting blog data: " + error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default GetBlogData;
