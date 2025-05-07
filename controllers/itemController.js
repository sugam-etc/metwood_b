// controllers/itemController.js
import Item from "../models/itemModel.js";
import cloudinary from "../utils/cloudinary.js";

// Create Item (Updated)
export const createItem = async (req, res) => {
  try {
    const { name, description, price, category, images } = req.body;

    if (!images || images.length === 0) {
      return res.status(400).json({ message: "No image URLs provided" });
    }

    const newItem = new Item({
      name,
      description,
      price,
      category,
      images, // Already URLs
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(500).json({ message: "Failed to create item" });
  }
};

// Get All Items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items); // Return all items in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Item
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
