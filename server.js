const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");
const cors = require("cors");
const io = require("socket.io")(http);

app.use(cors());

// send response
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/index.html"));
});

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("disconnect", () => {
    console.log("The user disconnect");
  });

  socket.on("message", (data) => {
    console.log("Received message:", data);
    socket.broadcast.emit("message", { message: data.message, to: data.to });
  });
});

// start server
http.listen(8000, () => {
  console.log("Server running on port 8000");
});
