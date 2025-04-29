import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
});

export const Gallery = mongoose.model("Gallery", GallerySchema);
