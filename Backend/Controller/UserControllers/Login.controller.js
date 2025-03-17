import userModel from "../../Models/user.model.js";
import { createTokenAndSaveCookie } from "../../jwt/generateToken.js";
import bcrypt from "bcryptjs";

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!user.isVerified) {
      return res.status(401).json({
        message: "Your email is not verified please check your inbox!",
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const key = process.env.USER_TOKEN;
    const userToken = createTokenAndSaveCookie(user._id, key, res);
    return res.status(200).json({
      message: "User logged in successfully",
      userToken,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default userLogin;
