const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://helciopimentelremote:DL8AxV5qpFMUoHiX@item.6s53u.mongodb.net/?retryWrites=true&w=majority&appName=Item";

console.log("Connecting to DB ...");

mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(
    console, "Error connecting to MongoDB"));
db.once("open", () => 
    console.log("Connected to MongoDB"));

module.exports = mongoose;
