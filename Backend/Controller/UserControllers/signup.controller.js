import { createTokenAndSaveCookie } from "../../jwt/generateToken.js";
import userModel from "../../Models/user.model.js";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userSignup = async (req, res) => {
  try {
    const verificationToken = crypto.randomBytes(20).toString("hex");

    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (password !== confirmPassword) {
      return res.status(409).json({ message: "Password does not match!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = new userModel({
      firstName,
      lastName,
      email,
      verificationToken,
      verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
      password: hashedPassword,
    });

    const newUser = await data.save();

    // Send Verification Email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    let verificationLink = `${process.env.FRONTEND_PORT}/register/verify-email/${verificationToken}`;

    let emailHtml = fs.readFileSync(
      path.join(__dirname, "../../upload/verify_email.html"),
      "utf8"
    );
    const styledHtml = emailHtml.replace(
      "{{LINK-_VERIFICATION}}",
      verificationLink
    );

    const mailOptions = {
      to: newUser.email,
      subject: "Verify Your Email",
      html: styledHtml,
    };
    transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Check your email inbox to verify your email!",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error });
  }
};

export default userSignup;
