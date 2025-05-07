const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String], // Array of image URLs
});

module.exports = mongoose.model("Item", itemSchema);
