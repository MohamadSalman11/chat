const io = require("socket.io-client");

const socket = io.connect("https://chat-dusky-rho.vercel.app");

socket.on("connect", () => {
  console.log("Helllooooooooo");
});
