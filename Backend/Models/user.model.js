import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Common Fields
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, sparse: true }, // Unique but optional for Google users
    // Manual Sign-Up Fields
    password: { type: String },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    verificationTokenExpires: Date,
    // Google Sign-In Fields
    googleId: { type: String, unique: true, sparse: true }, // Unique but optional for manual users
    // Additional Fields (Optional)
    profilePicture: { type: String, default: "/login/default-avator.png" }, // Google se profile picture store karne ke liye
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
