import adminModel from "../Models/admin.model.js";
import bcrypt from "bcryptjs";
import { createTokenAndSaveCookie } from "../jwt/generateToken.js";

const adminLogin = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let admin = await adminModel.findOne({
    username,
  });
  if (!admin) {
    return res.status(401).send("Invalid username");
  }
  let isPasswordMatch = await bcrypt.compare(password, admin.password);
  if (!isPasswordMatch) {
    return res.status(401).send("Invalid password");
  }
  let key = process.env.ADMIN_TOKEN;
  let token = createTokenAndSaveCookie(admin._id, key, res);
  res.status(200).send("Login Successfully!");
};
export default adminLogin;
