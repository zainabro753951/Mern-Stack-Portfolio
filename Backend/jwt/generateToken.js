import jwt from "jsonwebtoken";

export const createTokenAndSaveCookie = (data, key, res) => {
  try {
    const token = jwt.sign({ data }, process.env.JWT_KEY, {
      expiresIn: "30d",
    });
    res.cookie(key, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Adjust for cross-site
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      domain: ".vercel.app", // For all Vercel subdomains
      path: "/",
      signed: true,
    });
    return token;
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error creating token" });
  }
};
