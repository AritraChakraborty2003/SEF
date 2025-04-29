import { Team } from "../Models/Team.js";

// Create Team Member
export const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
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
    const team = await Team.findOneAndUpdate(
      { name: req.params.name },
      req.body,
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
