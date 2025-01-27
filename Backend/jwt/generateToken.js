import jwt from "jsonwebtoken";

export const createTokenAndSaveCookie = (adminId, res) => {
  try {
    const token = jwt.sign({ adminId }, process.env.JWT_KEY, {
      expiresIn: "2d",
    });
    res.cookie("token", token, {
      httpOnly: false, // Set to true for better security
      secure: true,
      sameSite: "Strict",
    });
    console.log("cookie set successfully");

    return token;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error creating token" });
  }
};
