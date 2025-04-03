import jwt from "jsonwebtoken";
import userModel from "../Models/user.model.js";

const secureUserRoute = async (req, res, next) => {
  try {
    const token = req.signedCookies.userToken;

    if (!token) {
      return res.status(401).json({ message: "No token, found" });
    }
    let decode;
    try {
      decode = jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
      console.error(err);
      return res.status(403).json({ message: "Token is not valid" });
    }

    const user = await userModel
      .findOne({ _id: decode.data })
      .select("-password");

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    return res
      .status(401)
      .json({ message: "No token, authorization denied", e });
  }
};

export default secureUserRoute;
