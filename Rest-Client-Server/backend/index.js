const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();
const Model = require("./model");
var http = require("http");
const cors = require("cors");
app.set("port", process.env.PORT || 5000);
var server = http.createServer(app);
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
mongoose.connect("mongodb://localhost:27017/TestDB1", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(cors());

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});
app.route("/postmsg").post((req, res) => {
  console.log(req.body);
  const model = Model({
    msg: req.body.msg,
  });
  model
    .save()
    .then(() => {
      return res.json({ msg: "model successfully stored" });
    })
    .catch((err) => {
      return res.status(400).json({ err: err });
    });
  //   res.json("hello");
});

app.route("/getmsgs").get((req, res) => {
  Model.find({}, (err, result) => {
    if (err) return res.json({ err: err });
    if (result == null) return res.json({ data: [] });
    else return res.json({ data: result });
  });
});
app.route("/delete").delete((req, res) => {
  Model.deleteMany({}, (err, result) => {
    if (err) return res.json({ err: err });
    if (result == null) return res.json({ data: [] });
    else return res.json({ data: result });
  });
});

// app.listen(port, "0.0.0.0", () =>
//   console.log(`welcome your listinnig at port ${port}`)
// );

io.sockets.on("connection", function (socket) {
  socket.on("messageChange", function (data) {
    console.log(data);
    socket.broadcast.emit("receive", data);
  });
});

server.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
