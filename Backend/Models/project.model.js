import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectSlug: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    techStacks: [
      {
        type: String,
        required: true,
      },
    ],
    projectType: {
      type: String,
      required: true,
    },
    projectUrl: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    screenshots: [
      {
        type: String,
        required: true,
      },
    ],
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    projectCategory: {
      type: String,
      required: true,
    },
    seoTitle: {
      type: String,
      required: true,
    },
    seoKeywords: [
      {
        type: String,
        required: true,
      },
    ],
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const projectModel = mongoose.model("projects", projectSchema);

export default projectModel;
