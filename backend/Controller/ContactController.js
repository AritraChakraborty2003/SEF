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

// Delete contact
export const deleteContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({});
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No contact record to delete" });
    }
    res.json({ message: "Contact information deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
