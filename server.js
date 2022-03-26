require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
//(routers)
const userRouter = require("./routes/user.router");
mongoose
  .connect(
    `mongodb+srv://hathairat:Saipan180541_@cluster0.epq6c.mongodb.net/Cpe451?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDB connected");
  });

const server = express();
server.use(bodyParser.json()); // ให้ server(express) ใช้งานการ parse json
server.use(morgan("dev")); // ให้ server(express) ใช้งานการ morgam module
server.use(cors()); // ให้ server(express) ใช้งานการ cors module

server.use("/api/user", userRouter);
const port = process.env.PORT || 5000;
server.listen(port, function () {
  console.log("Server Listen at http://localhost:" + port);
});
