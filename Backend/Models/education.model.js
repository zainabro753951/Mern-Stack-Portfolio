import mongoose from "mongoose";
let educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  fieldOfStudy: {
    type: String,
    required: true,
  },
  instituteName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  eduStatus: {
    type: String,
    required: false,
  },
  grade: {
    type: String,
    required: true,
  },
  certificate: {
    type: String,
    required: false,
  },
});

const educationModel = mongoose.model("educations", educationSchema);

export default educationModel;
