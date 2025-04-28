// Dot env Configuration
import dotenv from "dotenv";
dotenv.config();

// Express configuration
import express from "express";
const app = express();

// Importing Some Pakages for improvements
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dotenv Config
const port = process.env.PORT;

// CORS configuration for dev and also production
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [process.env.FRONTEND_PORT, process.env.FRONTEND_PORT2]
        : ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    exposedHeaders: ["x-custom-header"],
  })
);

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

// Trust reverse proxy
app.set("trust proxy", 1);

// Middleware
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET));
// Production logging
if (process.env.NODE_ENV === "production") {
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    { flags: "a" }
  );
  app.use(morgan("combined", { stream: accessLogStream }));
} else {
  app.use(morgan("dev"));
}
app.use(compression({ level: 9 }));
app.use(express.urlencoded({ extended: true }));
// Static files with caching
app.use(
  express.static(path.join(__dirname, "upload/"), {
    maxAge: process.env.NODE_ENV === "production" ? "7d" : "0",
    setHeaders: (res) => {
      res.header("X-Content-Type-Options", "nosniff");
    },
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === "production" ? 500 : 1000,
  message: "Too many requests, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Importing some Routes here
import admin from "./Routes/AdminRoutes/admin.route.js";
import Insert from "./Routes/AdminRoutes/Insert.route.js";
import getData from "./Routes/AdminRoutes/getData.route.js";
import deleteData from "./Routes/AdminRoutes/delete.route.js";

// Admin Routes
app.use(admin);
app.use(Insert);
app.use(getData);
app.use(deleteData);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Resource not found" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  // Optionally exit the process
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
