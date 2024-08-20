import { Server } from "socket.io";
import http from "http";
import express from "express";

let app = express();

let server = http.createServer(app);

let io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

let userSocketMap = {};

io.on("connection", (socket) => {
  // console.log("user connected", socket.id);

  let userId = socket.handshake.query.userId;

  if (userId != undefined) {
    userSocketMap[userId] = socket.id;
    // console.log(userSocketMap );
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap)); // object ko array me convert kia hai

  socket.on("disconnect", (reason) => {
    // console.log(`socket ${socket.id} disconnected due to ${reason}`);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // object ko array me convert kia hai
  });
});

let getReceiverSocketId = (receiverId)=>{
  return userSocketMap[receiverId]
}

export { app, server, io, getReceiverSocketId };

// console.log(process.env.HOST);
