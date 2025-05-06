import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  topic: { type: String, required: true },
  descr: { type: String, required: true },
  maindescr: {
    type: String,
    required: true,
  },
});

export const Service = mongoose.model("Service", ServiceSchema);
