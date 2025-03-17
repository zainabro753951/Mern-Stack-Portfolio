import { blogLike, blogModel } from "../../Models/blog.model.js";
import { io } from "../../Socket/server.js";

const blogLikesStored = async (req, res) => {
  try {
    const userId = req.user._id;
    const { blogId, like } = req.body;

    const existingLike = await blogLike.findOne({ userId, blogId });

    if (existingLike) {
      await blogLike.findOneAndDelete({ userId, blogId });
      const updatedBlog = await blogModel
        .findByIdAndUpdate(
          blogId,
          {
            $pull: { likes: existingLike._id },
          },
          { new: true }
        )
        .select("likes");

      io.emit("newLikes", updatedBlog);
      return res.status(200).json({ message: "Like removed", updatedBlog });
    }

    const newLike = new blogLike({ blogId, userId });
    await newLike.save();

    const updatedBlog = await blogModel
      .findByIdAndUpdate(
        blogId,
        {
          $push: { likes: newLike._id },
        },
        { new: true }
      )
      .select("likes");

    io.emit("newLikes", updatedBlog);

    return res.status(200).json({ message: "Like added", updatedBlog });
  } catch (error) {
    console.error("Error adding like:", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default blogLikesStored;
