import express from "express";
import {
  createOrUpdateContact,
  getContact,
} from "../Controller/ContactController.js";

const contactRouter = express.Router();

// Create or Update Contact (no file upload)
contactRouter.post("/", createOrUpdateContact);

// Get Contact
contactRouter.get("/", getContact);

export default contactRouter;
