import { io } from "socket.io-client";

// funktioniert
const socket = io("http://localhost:8000");

socket.on("connect", () => {
  console.log("Client connected");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
