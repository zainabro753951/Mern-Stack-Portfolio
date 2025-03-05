import mongoose from "mongoose";

let aboutSchema = new mongoose.Schema(
  {
    aboutHeadline: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    education: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    hobbies: {
      type: [String],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    instagram: {
      type: String,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    linkedIn: {
      type: String,
      required: false,
    },
    behance: {
      type: String,
      required: false,
    },
    profileImg: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

let aboutModel = mongoose.model("abouts", aboutSchema);

export default aboutModel;
