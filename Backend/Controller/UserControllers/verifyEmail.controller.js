import { createTokenAndSaveCookie } from "../../jwt/generateToken.js";
import userModel from "../../Models/user.model.js";

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await userModel.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid Token" });
    }

    const key = process.env.USER_TOKEN;
    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpires = null;
    await user.save();
    const userToken = createTokenAndSaveCookie(user._id.toString(), key, res);

    return res.json({
      message: "Email verified successfully",
      userToken,
      user: {
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default verifyEmail;
