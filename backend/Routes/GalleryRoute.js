import express from "express";
import {
  createGallery,
  getAllGalleries,
  updateGalleryByTitle,
  deleteGalleryByTitle,
} from "../Controller/GalleryController.js";
import { uploadSingle } from "../Middlewares/ImageUploader.js";

const galleryRouter = express.Router();

// Create Gallery (with image upload)
galleryRouter.post("/", uploadSingle, createGallery);

// Get all Galleries
galleryRouter.get("/", getAllGalleries);

// Update Gallery by title (with image upload if updating)
galleryRouter.put("/:title", uploadSingle, updateGalleryByTitle);

// Delete Gallery by title
galleryRouter.delete("/:title", deleteGalleryByTitle);

export default galleryRouter;
