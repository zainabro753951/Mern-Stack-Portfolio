import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import admin from "./Routes/admin.route.js";
import Insert from "./Routes/Insert.route.js";
import getData from "./Routes/getData.route.js";
dotenv.config();
const app = express();

const port = process.env.PORT || 4500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Monogdb Connection String
let mongooseUrl = process.env.MONGODBURL;
try {
  mongoose.connect(mongooseUrl);
  console.log("connected");
} catch (e) {
  console.log("error connecting to mongodb", e);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "upload/")));
app.use(cors());

// Routes here
app.use("/api", admin);
app.use("/api", Insert);
app.use("/api", getData);

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
