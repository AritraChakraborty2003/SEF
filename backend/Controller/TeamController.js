import { Team } from "../Models/Team.js";

// Create Team Member
export const createTeam = async (req, res) => {
  try {
    const { name, role, bio, phone } = req.body;
    const photo = req.file.filename;

    console.log(photo);
    const team = await new Team({
      name,
      role,
      bio,
      phone,
      photo,
    });
    team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Team Members
export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Team Member by name
export const updateTeamByName = async (req, res) => {
  try {
    const updateFields = {};

    // Body fields
    for (const key in req.body) {
      if (req.body[key] !== undefined && req.body[key] !== "") {
        updateFields[key] = req.body[key];
      }
    }

    // File field
    if (req.file?.filename) {
      updateFields.photo = req.file.filename;
    }

    const team = await Team.findOneAndUpdate(
      { name: req.params.name },
      { $set: updateFields },
      { new: true }
    );

    if (!team) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Team Member by name
export const deleteTeamByName = async (req, res) => {
  try {
    const team = await Team.findOneAndDelete({ name: req.params.name });
    if (!team) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
