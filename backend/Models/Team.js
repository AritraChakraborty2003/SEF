import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  photo: { type: String, required: true },
  bio: { type: String },
  phone: { type: String }, // Optional or required depending on your needs
});

export const Team = mongoose.model("Team", TeamSchema);
