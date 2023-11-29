import { io } from "socket.io-client";

const socket = io("ws://chat-2a8q.vercel.app", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Client connected");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
