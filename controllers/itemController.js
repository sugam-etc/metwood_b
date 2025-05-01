import Item from "../models/itemModel.js";

// Create Item
export const createItem = async (req, res) => {
  try {
    console.log("Uploaded files:", req.files); // 👈 Add this line
    const { name, description, price, category } = req.body;
    const images = req.files.map((file) => file.filename);
    const newItem = new Item({ name, description, price, category, images });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create item" });
  }
};

// Get All Items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
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
