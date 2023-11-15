const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const io = require("socket.io")(http, {
  cors: {
    origin: "https://chat-dusky-rho.vercel.app",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("disconnect", () => {
    console.log("The user disconnected");
  });
});

app.get("/", (req, res) => {
  console.log("client");
  res.send("Nice to meet you");
});

// start server
http.listen(8000, () => {
  console.log("Server running on port 8000");
});
