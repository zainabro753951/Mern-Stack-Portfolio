import multer from "multer";
import adminModel from "../../Models/admin.model.js";
import path from "path";
import fs from "fs";
let storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "upload/admin/");
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

let updateAdmin = async (req, res) => {
  upload.single("profileImg")(req, res, async (err) => {
    try {
      const {
        adminId,
        username,
        email,
        phoneNumber,
        gender,
        aboutMe,
        profileImg,
        oldProfileImg,
      } = req.body;

      // Check if a new profile image was uploaded
      let profileImgPath = profileImg; // If no new image, use existing value from form data

      if (req.file) {
        // If a new file was uploaded, replace the old file
        profileImgPath = `admin/${req.file.filename}`;
        console.log(profileImgPath);

        // Optionally, delete the old profile image file (if you want to replace it)

        if (oldProfileImg) {
          const oldImagePath = `upload/${oldProfileImg}`;
          console.log(oldImagePath);
          console.log(fs.existsSync(oldImagePath));

          if (fs.existsSync(oldImagePath)) {
            try {
              fs.unlinkSync(oldImagePath);
            } catch (e) {
              console.error("Error deleting old image:", e);
            }
          } else {
            console.log("Old image file not found to delete.");
          }
        }
      }

      //   // Find the about data document and update it
      const updatedAbout = await adminModel
        .findByIdAndUpdate(
          { _id: adminId }, // Use the specific document ID passed from the frontend
          {
            username,
            email,
            gender,
            phoneNumber,
            aboutMe,
            profileImg: profileImgPath, // Update with the new image path
          },
          { new: true } // Return the updated document
        )
        .select("-password");
      console.log(updateAdmin);

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
export default updateAdmin;
