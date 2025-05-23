import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const testimonialModel = mongoose.model("testimonials", testimonialSchema);

export default testimonialModel;
