import { Contact } from "../Models/Contact.js";

// Create or Update Contact
export const createOrUpdateContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate({}, req.body, {
      upsert: true,
      new: true,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Contact
export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
