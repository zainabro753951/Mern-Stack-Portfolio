import testimonialModel from "../Models/testimonial.model.js";
import fs from "fs";
import path from "path";
import multer from "multer";

let storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "upload/testimonialImgs/");
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

const addTestimonial = async (req, res) => {
  upload.single("profileImg")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error uploading image" });
    }

    const profileImg = req.file ? req.file.path : null; // Image ka path
    const actualPath = profileImg.slice(7);

    const { name, designation, company, rating, message, date } = req.body;
    try {
      const testimonial = new testimonialModel({
        name,
        designation,
        company,
        rating,
        message,
        date,
        profileImg: actualPath,
      });
      const result = await testimonial.save();
      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      if (profileImg) {
        fs.unlink(profileImg, (err) => {
          if (err) console.log("Error deleting image:", err);
        });
      }
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
};

export default addTestimonial;
