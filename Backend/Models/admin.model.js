import mongoose from "mongoose";
let adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: false,
    unique: true,
  },
  gender: {
    type: String,
    required: false,
  },
  profileImg: {
    type: String,
    default: "/default-avator.png",
  },
  aboutMe: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});
let adminModel = mongoose.model("admins", adminSchema);

export default adminModel;
