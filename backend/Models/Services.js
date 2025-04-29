import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  topic: { type: String, required: true },
  desc: { type: String, required: true },
});

export const Service = mongoose.model("Service", ServiceSchema);
