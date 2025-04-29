import express, { response } from "express";
const generalRouter = express.Router();

generalRouter.get("/", (req, res) => {
  res.json({
    status: "200",
    Message: "Ok",
    API_Version: 1.0,
    response: "Welcome to SEF APIs!!!",
  });
});

export default generalRouter;
