const io = require("socket.io-client");

const socket = io.connect("https://chat-2a8q.vercel.app");

socket.on("connect", () => {
  console.log("Helllooooooooo");
});
