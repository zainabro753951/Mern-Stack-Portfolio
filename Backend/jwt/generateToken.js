import jwt from "jsonwebtoken";

export const createTokenAndSaveCookie = (data, key, res) => {
  try {
    const token = jwt.sign({ data }, process.env.JWT_KEY, {
      expiresIn: "2d",
    });
    res.cookie(key, token, {
      httpOnly: true, // Prevent XSS
      secure: true, // HTTPS only
      sameSite: "Strict", // or 'Lax' for cross-site
      path: "/",
      maxAge: 900000, // 15 minutes in ms
      signed: true,
    });
    return token;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error creating token" });
  }
};
