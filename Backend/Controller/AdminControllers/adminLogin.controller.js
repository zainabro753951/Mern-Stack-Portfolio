import adminModel from "../../Models/admin.model.js";
import bcrypt from "bcryptjs";
import { createTokenAndSaveCookie } from "../../jwt/generateToken.js";

const adminLogin = async (req, res) => {
  try {
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
    res.status(200).json({ message: "Login Successfully!", admin });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
export default adminLogin;
