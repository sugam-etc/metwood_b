import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String], // Array of image URLs
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
