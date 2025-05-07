import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../controllers/itemController.js";

const router = express.Router();

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

router.post("/items", upload.array("images", 5), createItem);
router.get("/items", getAllItems);
router.delete("/items/:id", deleteItem);

export default router;
