import { io } from "socket.io-client";

// funktioniert
const socket = io("https://chat-xi-one.vercel.app", {
  //   transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Client connected");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
