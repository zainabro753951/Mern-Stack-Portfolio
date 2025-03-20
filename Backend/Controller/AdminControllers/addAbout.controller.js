import aboutModel from "../../Models/about.model.js";
import path from "path";
import multer from "multer";
import fs from "fs"; // File system module import karein

let storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "upload/aboutImgs/");
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

const setAboutData = async (req, res) => {
  upload.single("profileImg")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error uploading image" });
    }

    const profileImg = req.file ? req.file.path : null; // Image ka path
    const actualPath = profileImg.slice(7);

    const {
      firstName,
      lastName,
      aboutHeadline,
      location,
      education,
      phoneNumber,
      about,
      hobbies,
      email,
      linkedIn,
      facebook,
      behance,
      instagram,
    } = req.body;
    console.log(req.body);

    // Agar koi field missing hai
    if (
      !firstName ||
      !lastName ||
      !aboutHeadline ||
      !location ||
      !education ||
      !phoneNumber ||
      !about ||
      !hobbies ||
      !email
    ) {
      if (profileImg) {
        // Agar image upload hui hai, to use delete karein
        fs.unlink(profileImg, (err) => {
          if (err) console.log("Error deleting image:", err);
        });
      }
      return res.status(400).json({ message: "All fields are required" });
    }

    // Email aur phone number same hone par
    const isEmailAndPhoneNumberSame = await aboutModel.findOne({
      email,
      phoneNumber,
    });

    if (isEmailAndPhoneNumberSame) {
      if (profileImg) {
        // Agar image upload hui hai, to use delete karein
        fs.unlink(profileImg, (err) => {
          if (err) console.log("Error deleting image:", err);
        });
      }
      return res
        .status(400)
        .json({ message: "Email and phone number cannot be same" });
    }

    // About data create karein
    const aboutData = new aboutModel({
      firstName,
      lastName,
      aboutHeadline,
      location,
      education,
      phoneNumber,
      about,
      hobbies,
      email,
      linkedIn,
      facebook,
      behance,
      instagram,
      profileImg: actualPath,
    });

    try {
      const result = await aboutData.save();
      res.json({ message: "About data saved successfully", result });
    } catch (err) {
      console.log(err);
      if (profileImg) {
        // Agar database save mein error aaye, to image delete karein
        fs.unlink(profileImg, (err) => {
          if (err) console.log("Error deleting image:", err);
        });
      }
      res.status(500).json({ message: "Error saving about data" });
    }
  });
};

export default setAboutData;
