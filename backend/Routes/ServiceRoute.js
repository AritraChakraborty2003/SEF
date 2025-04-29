import express from "express";
import {
  createService,
  getAllServices,
  updateServiceByTopic,
  deleteServiceByTopic,
} from "../Controller/ServiceController.js";
import { uploadSingle } from "../Middlewares/ImageUploader.js";

const serviceRouter = express.Router();

// Create Service (with icon upload)
serviceRouter.post("/", uploadSingle, createService);

// Get all Services
serviceRouter.get("/", getAllServices);

// Update Service by topic (with icon upload if updating)
serviceRouter.put("/:topic", uploadSingle, updateServiceByTopic);

// Delete Service by topic
serviceRouter.delete("/:topic", deleteServiceByTopic);

export default serviceRouter;
