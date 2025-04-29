import { Gallery } from "../Models/Gallery.js";

// Create Gallery
export const createGallery = async (req, res) => {
  try {
    const gallery = await Gallery.create(req.body);
    res.status(201).json(gallery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Galleries
export const getAllGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.json(galleries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Gallery by title
export const updateGalleryByTitle = async (req, res) => {
  try {
    const gallery = await Gallery.findOneAndUpdate(
      { title: req.params.title },
      req.body,
      { new: true }
    );
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.json(gallery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Gallery by title
export const deleteGalleryByTitle = async (req, res) => {
  try {
    const gallery = await Gallery.findOneAndDelete({ title: req.params.title });
    if (!gallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.json({ message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
