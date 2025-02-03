const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(
    console, "Error connecting to MongoDB"));
db.once("open", () => 
    console.log("Connected to MongoDB"));

module.exports = mongoose;
