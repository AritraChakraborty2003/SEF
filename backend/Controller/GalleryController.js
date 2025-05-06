import { Gallery } from "../Models/Gallery.js";

// Create Gallery
export const createGallery = async (req, res) => {
  try {
    const image = req.file.filename;
    const { title, desc } = req.body;
    const gallery = await new Gallery({ title, image, desc });
    gallery.save();
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

export const updateGalleryByTitle = async (req, res) => {
  try {
    const updateFields = {};

    // Append body fields
    for (const key in req.body) {
      if (req.body[key] !== undefined && req.body[key] !== "") {
        updateFields[key] = req.body[key];
      }
    }

    // Add file if uploaded
    if (req.file && req.file.filename) {
      updateFields.image = req.file.filename; // Important: match schema field
    }

    const gallery = await Gallery.findOneAndUpdate(
      { title: req.params.title },
      { $set: updateFields },
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
