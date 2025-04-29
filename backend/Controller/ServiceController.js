import { Service } from "../Models/Services.js";

// Create Service
export const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Service by topic
export const updateServiceByTopic = async (req, res) => {
  try {
    const service = await Service.findOneAndUpdate(
      { topic: req.params.topic },
      req.body,
      { new: true }
    );
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Service by topic
export const deleteServiceByTopic = async (req, res) => {
  try {
    const service = await Service.findOneAndDelete({ topic: req.params.topic });
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
