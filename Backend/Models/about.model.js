import mongoose from "mongoose";

let aboutSchema = new mongoose.Schema({
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
  profileImg: {
    type: String,
    required: false,
  },
  lastUpdated: { type: Date, default: Date.now },
});

let aboutModel = mongoose.model("abouts", aboutSchema);

export default aboutModel;
