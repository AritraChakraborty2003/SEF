import { About } from "../Models/About.js";

// Create About
export const createAbout = async (req, res) => {
  try {
    const { subtitle, descr, type } = req.body;
    const image = req.file.filename;
    const about = await new About({ subtitle, descr, type, image });
    about.save();
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
    const updateFields = {};

    for (const key in req.body) {
      if (req.body[key] !== undefined && req.body[key] !== "") {
        updateFields[key] = req.body[key];
      }
    }

    if (req.file?.filename) {
      updateFields.image = req.file.filename;
    }

    const about = await About.findOneAndUpdate(
      { type: req.params.type },
      { $set: updateFields },
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
