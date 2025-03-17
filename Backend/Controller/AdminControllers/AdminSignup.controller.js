import adminModel from "../../Models/admin.model.js";
import bcrypt from "bcryptjs";
import { createTokenAndSaveCookie } from "../../jwt/generateToken.js";

const AdminSignup = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    let admin = await adminModel.findOne({
      username,
    });
    if (admin) {
      return res.status(401).send("Admin Already Exist");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newAdmin = new adminModel({
      username,
      password: hashPassword,
    });
    await newAdmin.save();
    let key = process.env.ADMIN_TOKEN;
    const token = await createTokenAndSaveCookie(newAdmin._id, key, res);
    console.log(token);
    return res.status(200).send("Account successfully Created");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
export default AdminSignup;
