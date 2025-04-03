import dotenv from "dotenv";
dotenv.config();
import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
const app = express();
const server = createServer(app);
const port = process.env.PORT;

const ioOptions = {
  cors: {
    origin:
      process.env.NODE_ENV === "development"
        ? ["http://localhost:5173"]
        : [process.env.FRONTEND_PORT, process.env.FRONTEND_PORT],

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Set-Cookie",
      "Accept",
      "X-Requested-With",
    ],
  },
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000,
    skipMiddlewares: true, // Improves recovery performance
  },
  // Production-specific optimizations
  transports: ["websocket", "polling"], // Explicitly specify transports
  perMessageDeflate: {
    threshold: 1024, // Size threshold for compression
    zlibDeflateOptions: {
      level: 3, // Compression level (1-9)
    },
  },
  pingTimeout: 60000, // 60 seconds
  pingInterval: 25000, // 25 seconds
  cookie:
    process.env.NODE_ENV === "production"
      ? {
          name: "io",
          httpOnly: true,
          path: "/",
          secure: true,
          sameSite: "none",
        }
      : false,
};

const io = new Server(server, ioOptions);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

// Store admin socket ID
export let adminSocketId = null;

// Function to set admin socket ID
export const setAdminSocketId = (socketId) => {
  adminSocketId = socketId;
};

// Function to remove admin socket ID on disconnect
export const removeAdminSocketId = (socketId) => {
  if (adminSocketId === socketId) {
    adminSocketId = null;
  }
};

io.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);

  socket.on("join-room", (roomId) => {
    console.log(`User joined room this: ${roomId}`);
    socket.join(roomId);
  });

  // Set admin socket ID if the connected client is admin
  socket.on("setAdminSocketId", async () => {
    setAdminSocketId(socket.id);
  });

  socket.on("disconnect", (reason) => {
    console.log(`Client disconnected: ${socket.id} - Reason: ${reason}`);
    removeAdminSocketId(socket.id);
  });

  socket.on("error", (error) => {
    console.error(`Socket error: ${error}`);
  });
});

export { app, io, server };
