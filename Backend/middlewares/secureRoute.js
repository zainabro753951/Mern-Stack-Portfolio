import jwt from "jsonwebtoken";
import adminModel from "../Models/admin.model.js";

const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({ msg: "No token, found" });
    }
    let decode;
    try {
      decode = jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
      console.error(err);
      return res.status(403).json({ msg: "Token is not valid" });
    }
    console.log(decode);

    const admin = await adminModel
      .findOne({ _id: decode.adminId })
      .select("-password");
    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }
    req.admin = admin;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
};

export default secureRoute;
