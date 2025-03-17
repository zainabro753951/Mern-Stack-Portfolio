import dotenv from "dotenv";
dotenv.config();
import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import { getAdminId } from "../admin/config.js";
import { BlogCommentNotification } from "../Models/blog.model.js";
import { pendingNotifications } from "../Controller/UserControllers/SendComment.controller.js";
const app = express();
const server = createServer(app);
const port = process.env.PORT;

const ioOptions = {
  cors: {
    origin: process.env.FRONTEND_PORT,
    methods: ["GET", "POST"],
    credentials: true,
  },
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000,
  },
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
