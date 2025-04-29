import { About } from "../Models/About.js";

// Create About
export const createAbout = async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(201).json(about);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Abouts
export const getAllAbouts = async (req, res) => {
  try {
    const abouts = await About.find();
    res.json(abouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update About by type
export const updateAboutByType = async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { type: req.params.type },
      req.body,
      { new: true }
    );
    if (!about) {
      return res.status(404).json({ message: "About not found" });
    }
    res.json(about);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete About by type
export const deleteAboutByType = async (req, res) => {
  try {
    const about = await About.findOneAndDelete({ type: req.params.type });
    if (!about) {
      return res.status(404).json({ message: "About not found" });
    }
    res.json({ message: "About deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
