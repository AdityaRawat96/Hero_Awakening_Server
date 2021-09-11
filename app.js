"use strict";
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const port = 8000;
const connectDB = require("./config/db");
// const bodyParser = require("body-parser");
const route = require("./routes/route");
// var corsOptions = {
//   origin: "http://localhost:8000",
// };

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config({ path: "./config/config.env" });
connectDB();
app.use("/", route);
app.listen(port, () => {
  console.log("App started at port 8000");
});
