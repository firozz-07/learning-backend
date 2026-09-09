const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  housename: String,
  price: Number,
  location: String,
  image: String,
  description: String
});

module.exports = mongoose.model("Home", homeSchema);