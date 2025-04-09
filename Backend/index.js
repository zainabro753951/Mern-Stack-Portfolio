import express from "express";
import cors from "cors";
import { app, server } from "./Socket/server.js";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import admin from "./Routes/AdminRoutes/admin.route.js";
import Insert from "./Routes/AdminRoutes/Insert.route.js";
import getData from "./Routes/AdminRoutes/getData.route.js";
import deleteData from "./Routes/AdminRoutes/delete.route.js";
import user from "./Routes/UserRoutes/user.route.js";
import likes from "./Routes/UserRoutes/likes.router.js";
import DeepSeek from "./Routes/UserRoutes/DeepSeek.route.js";
import commentsRoute from "./Routes/UserRoutes/comments.route.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

// Dotenv Config

const allowedOrigins = [
  process.env.FRONTEND_PORT,
  process.env.FRONTEND_PORT2,
  "http://localhost:5173",
  /\.vercel\.app$/,
];

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [process.env.FRONTEND_PORT, process.env.FRONTEND_PORT2]
        : " http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    exposedHeaders: ["x-custom-header"],
  })
);

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
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("combined")); // Or 'tiny' for less verbose logging
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "upload/")));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting for certain important API endpoints
    const skipUrl = [
      req.url.startsWith("/admin/get_blog_comments_notification"),
      req.url.startsWith("/user/blog/all_comments"),
    ];
    return skipUrl;
  },
});
app.use(limiter);

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

// After all routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  // Optionally exit the process
  // process.exit(1);
});
