import express from "express";
const app = express();
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import dotenv from "dotenv";
import admin from "./Routes/admin.route.js";
import Insert from "./Routes/Insert.route.js";
import getData from "./Routes/getData.route.js";
import cookieParser from "cookie-parser";
// Dotenv Config
dotenv.config();
const port = process.env.PORT || 4500;
// Cors configuration
app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: true,
  })
);

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
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "upload/")));

// Routes here
app.use(admin);
app.use(Insert);
app.use(getData);

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
