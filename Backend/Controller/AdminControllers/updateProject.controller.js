import projectModel from "../../Models/project.model.js";
import fs from "fs";
import multer from "multer";
import path from "path";

// Configure multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/projectImgs/"); // Save files in the 'upload/projectImgs/' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Generate a unique filename
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    ); // Append the file extension
  },
});

const upload = multer({ storage: storage });

const updateProject = async (req, res) => {
  // Handle file uploads using multer
  upload.fields([
    { name: "poster", maxCount: 1 }, // Allow 1 poster file
    { name: "screenshots", maxCount: 5 }, // Allow up to 5 screenshot files
    { name: "video", maxCount: 1 }, // Allow 1 video file
  ])(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error uploading files" });
    }

    const { id } = req.params; // Extract project ID from request parameters
    const {
      projectName,
      projectSlug,
      projectDescription,
      projectDescription2,
      projectDescription3,
      techStacks,
      projectType,
      projectUrl,
      githubUrl,
      tags,
      oldPoster,
      oldScreenshots,
      oldVideo,
      projectCategory,
      seoTitle,
      seoKeywords,
      metaDescription,
    } = req.body; // Extract project details from request body
    if (!seoKeywords || !tags || !techStacks) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    // Initialize file paths
    let posterImagePath = oldPoster || ""; // Use old poster path if no new file is uploaded
    let screenshotsImagePath = oldScreenshots
      ? oldScreenshots.toString().split(",")
      : []; // Use old screenshots if no new files are uploaded
    let videoImagePath = oldVideo || ""; // Use old video path if no new file is uploaded

    // Update file paths if new files are uploaded
    if (req.files) {
      if (req.files.poster) {
        posterImagePath = `projectImgs/${req.files.poster[0].filename}`; // Update poster path
        console.log(posterImagePath);

        // Delete old poster if it exists
        if (oldPoster) {
          const oldPosterPath = `upload/${oldPoster}`;
          console.log(fs.existsSync(oldPosterPath));

          if (fs.existsSync(oldPosterPath)) {
            fs.unlinkSync(oldPosterPath); // Delete the old poster
          }
        }
      }

      if (req.files.video) {
        videoImagePath = `projectImgs/${req.files.video[0].filename}`; // Update video path
        // Delete old video if it exists
        if (oldVideo) {
          const oldVideoPath = `upload/${oldVideo}`;
          console.log(fs.existsSync(oldVideoPath));

          if (fs.existsSync(oldVideoPath)) {
            fs.unlinkSync(oldVideoPath); // Delete the old video
          }
        }
      }

      if (req.files.screenshots) {
        screenshotsImagePath = req.files.screenshots.map(
          (file) => `projectImgs/${file.filename}`
        ); // Update screenshots paths
        // Delete old screenshots if they exist
        if (oldScreenshots) {
          oldScreenshots
            .toString()
            .split(",")
            .forEach((screenshot) => {
              const oldScreenshotPath = `upload/${screenshot}`;
              console.log(fs.existsSync(oldScreenshotPath));

              if (fs.existsSync(oldScreenshotPath)) {
                fs.unlinkSync(oldScreenshotPath); // Delete the old screenshot
              }
            });
        }
      }
    }

    try {
      // Find the project by ID
      const project = await projectModel.findById(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      // Update project details
      project.projectName = projectName;
      project.projectSlug = projectSlug;
      project.projectDescription = projectDescription;
      project.projectDescription2 = projectDescription2;
      project.projectDescription3 = projectDescription3;
      project.techStacks = techStacks;
      project.projectType = projectType;
      project.projectUrl = projectUrl;
      project.githubUrl = githubUrl;
      project.tags = tags;
      project.projectCategory = projectCategory;
      project.seoTitle = seoTitle;
      project.seoKeywords = seoKeywords;
      project.metaDescription = metaDescription;
      project.poster = posterImagePath;
      project.video = videoImagePath;
      project.screenshots = screenshotsImagePath;

      // Save the updated project
      const updatedProject = await project.save();

      // Return the updated project
      res.status(200).json(updatedProject);
    } catch (error) {
      console.error("Error updating project:", error);

      // Delete newly uploaded files if an error occurs
      if (req.files) {
        if (req.files.poster) {
          const newPosterPath = `upload/${req.files.poster[0].filename}`;
          if (fs.existsSync(newPosterPath)) {
            fs.unlinkSync(newPosterPath);
          }
        }
        if (req.files.video) {
          const newVideoPath = `upload/${req.files.video[0].filename}`;
          if (fs.existsSync(newVideoPath)) {
            fs.unlinkSync(newVideoPath);
          }
        }
        if (req.files.screenshots) {
          req.files.screenshots.forEach((file) => {
            const newScreenshotPath = `upload/${file.filename}`;
            if (fs.existsSync(newScreenshotPath)) {
              fs.unlinkSync(newScreenshotPath);
            }
          });
        }
      }

      res.status(500).json({ message: "Internal Server Error" });
    }
  });
};

export default updateProject;
