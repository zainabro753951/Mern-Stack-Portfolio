import testimonialModel from "../../Models/testimonial.model.js";
import multer from "multer";
import path from "path";
import fs from "fs";

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

const editTestimonial = async (req, res) => {
  upload.single("profileImg")(req, res, async (error) => {
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const { id } = req.params;
    const {
      name,
      designation,
      company,
      rating,
      message,
      profileImg,
      oldProfileImage,
      date,
    } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }
    const testimonial = await testimonialModel.findOneAndUpdate({ _id: id });
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    let profileImgPath = profileImg ? profileImg : "";

    if (req.file) {
      profileImgPath = `/testimonialImgs/${req.file.filename}`;
      if (oldProfileImage) {
        const oldProfileImagePath = `upload${oldProfileImage}`;
        console.log(oldProfileImagePath);
        console.log(fs.existsSync(oldProfileImagePath));

        if (fs.existsSync(oldProfileImagePath)) {
          try {
            fs.unlinkSync(oldProfileImagePath); // Delete the old image
          } catch (e) {
            console.error("Error deleting old image:", e);
          }
        }
      }
    }

    testimonial.name = name;
    testimonial.designation = designation;
    testimonial.company = company;
    testimonial.rating = rating;
    testimonial.message = message;
    testimonial.profileImg = profileImgPath;
    testimonial.date = date;

    let result = await testimonial.save();

    res
      .status(200)
      .json({ message: "Successfully updated testimonial!", result });
  });
};

export default editTestimonial;
