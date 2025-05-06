import { Admin } from "../Models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    maxAge: 60 * 60 * 1000,
  });

  res.status(200).json({ message: "Login successful" });
};

export const logoutAdmin = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  });

  res.status(200).json({ message: "Logged out successfully" });
};

export const isLoggedIn = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export const addAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin already exists
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const newAdmin = new Admin({ email, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
