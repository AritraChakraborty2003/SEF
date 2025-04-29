import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  donation_email: String,
  donation_phone: String,
  volunteer_email: String,
  volunteer_phone: String,
  address: { type: String, required: true },
});

export const Contact = mongoose.model("Contact", ContactSchema);
