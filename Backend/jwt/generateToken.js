import jwt from "jsonwebtoken";

export const createTokenAndSaveCookie = (data, key, res) => {
  try {
    const token = jwt.sign({ data }, process.env.JWT_KEY, {
      expiresIn: "2d",
    });
    res.cookie(key, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/", // Same path for both cookies
    });
    return token;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error creating token" });
  }
};
