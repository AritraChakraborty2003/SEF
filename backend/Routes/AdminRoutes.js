import express from "express";
import { loginAdmin, logoutAdmin } from "../Controller/AdminControllers.js";
import { isLoggedIn } from "../Controller/AdminControllers.js";
import { addAdmin } from "../Controller/AdminControllers.js";
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.get("/logout", logoutAdmin);
adminRouter.get("/check", isLoggedIn, (req, res) =>
  res.json({ message: "Authorized" })
);
adminRouter.post("/register", addAdmin);

export default adminRouter;
