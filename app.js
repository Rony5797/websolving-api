const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./src/routes/routers");
var cors = require("cors");

// Security Middleware implements
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose
  .connect(
    "mongodb+srv://websolvings:Websolvings1234@cluster0.q3wudum.mongodb.net/Websolvings"
  )
  .then(() => console.log("Database conected"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// API
app.use("/api", router);

module.exports = app;
