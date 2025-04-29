import express from "express";
import {
  createTeam,
  getAllTeams,
  updateTeamByName,
  deleteTeamByName,
} from "../Controller/TeamController.js";
import { uploadSingle } from "../Middlewares/ImageUploader.js";

const teamRouter = express.Router();

// Create Team Member (with photo upload)
teamRouter.post("/", uploadSingle, createTeam);

// Get all Team Members
teamRouter.get("/", getAllTeams);

// Update Team Member by name (with photo upload if updating)
teamRouter.put("/:name", uploadSingle, updateTeamByName);

// Delete Team Member by name
teamRouter.delete("/:name", deleteTeamByName);

export default teamRouter;
