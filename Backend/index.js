// Environment Configuration
import dotenv from "dotenv";
dotenv.config();

// Express configuration
import express from "express";
const app = express();

// Importing required packages
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import compression from "compression";
import fs from "fs";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import createHttpError from "http-errors";
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Environment variables
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";

// Database Connection with retry logic
const MAX_RETRIES = 5;
const RETRY_DELAY = 5000; // 5 seconds

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODBURL, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("✅ Connected to MongoDB");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected");
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
}

// Enhanced security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "trusted.cdn.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
        imgSrc: ["'self'", "data:", "blob:", "cdn.example.com"],
        connectSrc: ["'self'", "api.example.com"],
        fontSrc: ["'self'", "fonts.gstatic.com"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginResourcePolicy: { policy: "cross-origin" },
    hsts: {
      maxAge: 63072000, // 2 years in seconds
      includeSubDomains: true,
      preload: true,
    },
  })
);

// CORS configuration
const corsOptions = {
  origin: isProduction
    ? process.env.FRONTEND_PORTS?.split(",") || []
    : ["http://localhost:5173", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-custom-header"],
  credentials: true,
  exposedHeaders: ["x-custom-header"],
  optionsSuccessStatus: 204,
  maxAge: 86400, // 24 hours
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Enable pre-flight for all routes

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: isProduction ? 500 : 1000,
  message: "Too many requests from this IP, please try again later",
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.ip === "::1", // Skip localhost in development
});

app.use(limiter);

// Static files with caching
app.use(
  express.static(path.join(__dirname, "upload/"), {
    maxAge: isProduction ? "1y" : "0",
    setHeaders: (res, path) => {
      if (path.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      }
    },
  })
);

// Trust proxy in production
if (isProduction) {
  app.set("trust proxy", 1);
}

// Security middlewares
app.use(hpp());
app.use(mongoSanitize());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(
  cookieParser(process.env.COOKIE_SECRET, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "strict" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  })
);

// Logging
app.use(morgan(isProduction ? "combined" : "dev"));

// Compression
app.use(
  compression({
    level: 9,
    threshold: 1024,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) return false;
      return compression.filter(req, res);
    },
  })
);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

const staticDir = path.join(__dirname, "..");
app.use(express.static(staticDir));
// Import routes
import adminRouter from "./Routes/AdminRoutes/admin.route.js";
import insertRouter from "./Routes/AdminRoutes/Insert.route.js";
import getDataRouter from "./Routes/AdminRoutes/getData.route.js";
import deleteDataRouter from "./Routes/AdminRoutes/delete.route.js";

// Mount routes
app.use("/api", adminRouter);
app.use("/api", insertRouter);
app.use("/api", getDataRouter);
app.use("/api", deleteDataRouter);

// Improved catch-all route handler
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    const error = createHttpError.NotFound(
      `API endpoint ${req.method} ${req.url} not found`
    );
    return next(error);
  }

  // For non-API requests, serve index.html for frontend routing
  const indexPath = path.join(staticDir, "../index.html");

  // Verify the file exists before sending
  if (!fs.existsSync(indexPath)) {
    const error = createHttpError.NotFound(
      `Frontend file not found at ${indexPath}`
    );
    return next(error);
  }

  // Set proper content type
  res.set("Content-Type", "text/html");

  // Send the file with error handling
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error sending index.html:", err);
      next(createHttpError.InternalServerError("Failed to load frontend"));
    }
  });
});

// 404 Handler
app.use((req, res, next) => {
  next(createHttpError.NotFound(`Route ${req.method} ${req.url} not found`));
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  const status = err.status || 500;
  const message =
    isProduction && status === 500 ? "Something went wrong" : err.message;
  const stack = isProduction ? undefined : err.stack;

  res.status(status).json({
    error: {
      status,
      message,
      ...(!isProduction && { stack }),
    },
  });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    mongoose.connection.close(false, () => {
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    mongoose.connection.close(false, () => {
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  });
});

// Start server after DB connection
const server = app.listen(port, async () => {
  try {
    await connectToDatabase();
    console.log(`🚀 Server running on http://localhost:${port}`);
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
});

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  server.close(() => process.exit(1));
});
