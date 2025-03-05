import projectModel from "../Models/project.model.js";
import fs from "fs";
import multer from "multer";
import path from "path";

let storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "upload/projectImgs/");
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

const addProject = async (req, res) => {
  upload.fields([
    { name: "poster", maxCount: 1 },
    { name: "screenshots", maxCount: 5 },
    { name: "video", maxCount: 1 },
  ])(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error uploading image" });
    }
    if (!req.files) {
      return res.status(401).json({ message: "Please upload images" });
    }
    const { poster, video, screenshots } = req.files;
    const [posterFile] = poster;
    const [videoFile] = video;

    // ========= poster path ===========
    const posterPath = posterFile.path;
    const actualPosterPath = posterPath.slice(7);

    // ========= video path ===========
    const videoPath = videoFile.path;
    const actualVideoPath = videoPath.slice(7);

    // =========== screenshots path =============
    const screenShotsPath = screenshots.map((items) => {
      return items.path;
    });
    const acutalscreenShotsPath = screenShotsPath.map((path) => {
      return path.slice(7);
    });

    try {
      const {
        projectName,
        projectSlug,
        projectDescription,
        techStacks,
        projectType,
        projectUrl,
        githubUrl,
        tags,
        projectCategory,
        seoTitle,
        seoKeywords,
      } = req.body;

      const exitsProject = await projectModel.find({ projectName });

      if (exitsProject.length > 0) {
        if (posterPath) {
          fs.unlink(posterPath, (err) => {
            if (err) console.log("Error deleting poster Images:", err);
          });
        }
        if (videoPath) {
          fs.unlink(videoPath, (err) => {
            if (err) console.log("Error deleting videos:", err);
          });
        }
        if (screenShotsPath.length > 0) {
          screenShotsPath.find((path) => {
            fs.unlink(path, (err) => {
              if (err) console.log("Error deleting screenShots:", err);
            });
          });
        }
        return res.status(400).json({ message: "Project already exits" });
      }

      const response = new projectModel({
        projectName,
        projectSlug,
        projectDescription,
        techStacks,
        projectType,
        projectUrl,
        githubUrl,
        tags,
        projectCategory,
        seoTitle,
        seoKeywords,
        poster: actualPosterPath,
        video: actualVideoPath,
        screenshots: acutalscreenShotsPath,
      });

      const result = await response.save();
      res.status(200).json(result);
    } catch (error) {
      if (posterPath) {
        fs.unlink(posterPath, (err) => {
          if (err) console.log("Error deleting poster Images:", err);
        });
      }
      if (videoPath) {
        fs.unlink(videoPath, (err) => {
          if (err) console.log("Error deleting videos:", err);
        });
      }
      if (screenShotsPath.length > 0) {
        screenShotsPath.forEach((path) => {
          fs.unlink(path, (err) => {
            if (err) console.log("Error deleting screenShots:", err);
          });
        });
      }
      console.log(error);

      res.status(500).json({ message: "Internal Server Error" });
    }
  });
};

export default addProject;
