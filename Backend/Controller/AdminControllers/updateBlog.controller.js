import multer from "multer";
import path from "path";
import fs from "fs";
import { blogModel } from "../../Models/blog.model.js";

// Configure storage for multer
let storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "upload/blogImgs/");
  },
  filename: (req, file, cd) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cd(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Initialize multer
const upload = multer({ storage: storage });

// The updateBlog function
const updateBlog = (req, res) => {
  upload.single("featuredImage")(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: `Error Uploading Image: ${err.message}` });
    }

    const {
      blogId,
      title,
      content,
      author,
      date,
      category,
      tags,
      featuredImage,
      oldFeaturedImage,
      slug,
      metaDescription,
      allowComments,
      seoTitle,
      seoKeywords,
      description,
      socialMediaSharing,
    } = req.body;

    let featuredImagePath = featuredImage ? featuredImage : ""; // Fallback to the existing image if no new image is uploaded

    // If a new file is uploaded, update the path for the featuredImage
    if (req.file) {
      featuredImagePath = `/blogImgs/${req.file.filename}`;

      // If there's an old image and it's different, delete it
      if (oldFeaturedImage) {
        const oldFeaturedPath = `upload${oldFeaturedImage}`;
        console.log(oldFeaturedPath);
        console.log(fs.existsSync(oldFeaturedPath));

        if (fs.existsSync(oldFeaturedPath)) {
          try {
            fs.unlinkSync(oldFeaturedPath); // Delete the old image
          } catch (e) {
            console.error("Error deleting old image:", e);
          }
        }
      }
    }

    try {
      // Update the blog with the new data
      const updatedBlog = await blogModel.findByIdAndUpdate(
        blogId,
        {
          title,
          content,
          author,
          date,
          category,
          tags,
          featuredImage: featuredImagePath,
          slug,
          metaDescription,
          allowComments,
          seoTitle,
          seoKeywords,
          description,
          socialMediaSharing,
        },
        { new: true }
      );

      if (!updatedBlog) {
        return res.status(404).json({ message: "Blog not found" });
      }

      // Fetch all blogs after updating
      const allBlogs = await blogModel.find().sort({ createdAt: -1 });

      // Send the updated blog and the list of all blogs in the response
      res.json({
        updatedBlog,
        allBlogs,
      });
    } catch (error) {
      console.error("Error updating blog:", error);
      res.status(500).json({ message: "Error updating blog" });
    }
  });
};

export default updateBlog;
