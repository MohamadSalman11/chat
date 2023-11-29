const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("disconnect", () => {
    console.log("The user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Nice to meet");
});

// starte den Server
const port = process.env.PORT || 8000;
http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
