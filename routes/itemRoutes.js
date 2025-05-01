import express from "express";
import multer from "multer";
import path from "path";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../controllers/itemController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post("/items", upload.array("images", 5), createItem);
router.get("/items", getAllItems);
router.delete("/items/:id", deleteItem);

export default router;
