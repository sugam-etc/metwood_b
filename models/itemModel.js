import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    images: [String],
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
