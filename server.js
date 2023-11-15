const express = require("express");
const app = express();
const http = require("http").Server(app); // Fix this line
const cors = require("cors");
const io = require("socket.io")(http);

app.use(cors());
io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("disconnect", () => {
    console.log("The user disconnected"); // Fix the log message as well
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
