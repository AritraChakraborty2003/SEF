import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  image: { type: String, required: true },
  subtitle: { type: String, required: true },
  descr: { type: String, required: true },
  type: { type: String, required: true }, // newly added field
});

export const About = mongoose.model("About", AboutSchema);
