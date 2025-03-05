import multer from "multer";
import path from "path";
import fs from "fs";
import { blogModel } from "../Models/blog.model.js";

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
const upload = multer({ storage: storage });

const addBlog = async (req, res) => {
  upload.single("featuredImage")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error uploading image" });
    }
    const featuredImage = req.file ? req.file.path : null;
    console.log(featuredImage);

    const actualPath = featuredImage.slice(7);

    const {
      title,
      content,
      author,
      date,
      category,
      tags,
      slug,
      metaDescription,
      allowComments,
      seoTitle,
      seoKeywords,
      description,
      socialMediaSharing,
    } = req.body;

    try {
      const isExistBlog = await blogModel.findOne({ title });

      if (isExistBlog) {
        if (featuredImage) {
          // Agar image upload hui hai, to use delete karein
          fs.unlink(featuredImage, (err) => {
            if (err) console.log("Error deleting image:", err);
          });
        }
        return res.status(400).json({ message: "Blog already exist" });
      }

      const data = await blogModel({
        title,
        content,
        author,
        date,
        category,
        tags,
        slug,
        metaDescription,
        allowComments,
        seoTitle,
        seoKeywords,
        description,
        socialMediaSharing,
        featuredImage: actualPath,
      });
      const result = await data.save();
      console.log(data);
      res.status(200).json(result);
    } catch (error) {
      if (featuredImage) {
        // Agar image upload hui hai, to use delete karein
        fs.unlink(featuredImage, (err) => {
          if (err) console.log("Error deleting image:", err);
        });
      }
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
};

export default addBlog;
