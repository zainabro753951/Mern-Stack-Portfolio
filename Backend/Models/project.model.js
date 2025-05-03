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
    projectDescription2: {
      type: String,
    },
    projectDescription3: {
      type: String,
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
      required: false,
    },
    githubUrl: {
      type: String,
      required: false,
    },
    poster: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: false,
    },
    screenshots: [
      {
        type: String,
        required: false,
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
    metaDescription: {
      type: String,
      required: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
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
