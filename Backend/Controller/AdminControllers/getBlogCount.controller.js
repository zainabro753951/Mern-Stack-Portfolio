import { blogModel } from "../../Models/blog.model.js";

const getBlogCounts = async (req, res) => {
  try {
    const [availableBlogs, deletedBlogs] = await Promise.all([
      blogModel.countDocuments({ isDeleted: false }),
      blogModel.countDocuments({ isDeleted: true }),
    ]);
    res.status(200).json({ availableBlogs, deletedBlogs });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default getBlogCounts;
