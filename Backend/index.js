import express from "express";
import cors from "cors";
import { app, server } from "./Socket/server.js";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import admin from "./Routes/AdminRoutes/admin.route.js";
import Insert from "./Routes/AdminRoutes/Insert.route.js";
import getData from "./Routes/AdminRoutes/getData.route.js";
import deleteData from "./Routes/AdminRoutes/delete.route.js";
import user from "./Routes/UserRoutes/user.route.js";
import likes from "./Routes/UserRoutes/likes.router.js";
import DeepSeek from "./Routes/UserRoutes/DeepSeek.route.js";
import commentsRoute from "./Routes/UserRoutes/comments.route.js";
import cookieParser from "cookie-parser";

// Dotenv Config

const allowedOrigins = [
  process.env.FRONTEND_PORT,
  process.env.FRONTEND_PORT2,
  "http://localhost:5173",
  /\.vercel\.app$/,
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (
      allowedOrigins.some((allowedOrigin) => {
        if (typeof allowedOrigin === "string") {
          return origin === allowedOrigin;
        } else {
          return allowedOrigin.test(origin);
        }
      })
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Set-Cookie",
    "Accept",
    "X-Requested-With",
  ],
  exposedHeaders: [
    "Set-Cookie",
    "Authorization",
    "Content-Length",
    "X-Request-ID",
  ],
  optionsSuccessStatus: 200,
  maxAge: 86400,
};

app.use(cors(corsOptions));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB Connection String
const mongooseUrl = process.env.MONGODBURL;
try {
  await mongoose.connect(mongooseUrl, {
    maxPoolSize: 10, // Connection pool size
  });
  console.log("Connected to MongoDB");
} catch (e) {
  console.log("Error connecting to MongoDB", e);
}

// Middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "upload/")));

// Admin Routes
app.use(admin);
app.use(Insert);
app.use(getData);
app.use(deleteData);

// User Routes
app.use(user);

// Comments Route
app.use(commentsRoute);

// DeepSeek Model Integrating
app.use(DeepSeek);

app.use(likes);
