import multer from "multer";
import aboutModel from "../../Models/about.model.js";
import path from "path";
import fs from "fs";
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

let updateAboutValues = async (req, res) => {
  upload.single("profileImg")(req, res, async (err) => {
    try {
      console.log(req.body);
      const {
        aboutId,
        aboutHeadline,
        location,
        education,
        phoneNumber,
        about,
        hobbies,
        email,
        facebook,
        instagram,
        behance,
        linkedIn,
      } = req.body;

      // Check if a new profile image was uploaded
      let profileImgPath = req.body.profileImg; // If no new image, use existing value from form data

      if (req.file) {
        // If a new file was uploaded, replace the old file
        profileImgPath = `aboutImgs/${req.file.filename}`;

        // Optionally, delete the old profile image file (if you want to replace it)

        if (req.body.oldProfileImg) {
          const oldImagePath = `upload/${req.body.oldProfileImg}`;
          console.log(oldImagePath);
          console.log(fs.existsSync(oldImagePath));

          if (fs.existsSync(oldImagePath)) {
            try {
              fs.unlinkSync(oldImagePath);
            } catch (e) {
              console.error("Error deleting old image:", e);
            }
          }
        }
      }

      // Find the about data document and update it
      const updatedAbout = await aboutModel.findByIdAndUpdate(
        { _id: aboutId }, // Use the specific document ID passed from the frontend
        {
          aboutHeadline,
          location,
          education,
          phoneNumber,
          about,
          hobbies,
          email,
          facebook,
          instagram,
          behance,
          linkedIn,
          profileImg: profileImgPath, // Update with the new image path
        },
        { new: true } // Return the updated document
      );

      if (updatedAbout) {
        return res.status(200).json(updatedAbout);
      } else {
        return res.status(404).json({ message: "About data not found" });
      }
    } catch (error) {
      console.error("Error updating about data:", error);
      return res.status(500).json({ message: "Error updating about data" });
    }
  });
};

export default updateAboutValues;
