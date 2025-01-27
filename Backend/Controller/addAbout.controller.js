import aboutModel from "../Models/about.model.js";
import path from "path";
import multer from "multer";

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
    const profileImg = req.file ? req.file.path : null;
    const {
      aboutHeadline,
      location,
      education,
      phoneNumber,
      about,
      hobbies,
      email,
    } = req.body;

    let aboutData = await aboutModel({
      aboutHeadline,
      location,
      education,
      phoneNumber,
      about,
      hobbies,
      email,
      profileImg,
    });
    let result = await aboutData.save();
    console.log(result);

    res.json("data received");
  });
};

export default setAboutData;
