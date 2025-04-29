import express from "express";
import {
  createAbout,
  getAllAbouts,
  updateAboutByType,
  deleteAboutByType,
} from "../Controller/AboutController.js";
import { uploadSingle } from "../Middlewares/ImageUploader.js";

const aboutRouter = express.Router();

// Create About (with image upload)
aboutRouter.post("/", uploadSingle, createAbout);

// Get all Abouts
aboutRouter.get("/", getAllAbouts);

// Update About by type (with image upload if updating)
aboutRouter.put("/:type", uploadSingle, updateAboutByType);

// Delete About by type
aboutRouter.delete("/:type", deleteAboutByType);

export default aboutRouter;
