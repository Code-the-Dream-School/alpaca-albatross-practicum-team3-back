const mongoose = require("mongoose");

const connectDB = async (url) => {
  await mongoose.connect(url);
  console.log("Connected to MongoDB");
};

module.exports = connectDB;
