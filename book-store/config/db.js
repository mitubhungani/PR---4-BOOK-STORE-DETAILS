const mongoose = require("mongoose");

const DBConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/book-store");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = DBConnect;
