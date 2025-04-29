import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./Connections/ConnectDB.js";
import contactRouter from "./Routes/ContactRoute.js";
import galleryRouter from "./Routes/GalleryRoute.js";
import serviceRouter from "./Routes/ServiceRoute.js";
import teamRouter from "./Routes/TeamRoute.js";
import generalRouter from "./Routes/generalRouter.js";

/*--- To acess .env values ---*/
dotenv.config();

/*----APP Setup----*/
const app = express();

/* --- .env values --- */
const PORT = process.env.PORT;
const MONGDB_URI = process.env.MONGODB_URI;

/*--- Middlewares----*/
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
app.use(cookieParser());

/* --- Connect to Database --- */
connectDB(MONGDB_URI);

/*--- The api routes --- */
app.use("/", generalRouter);
app.use("/api/v1", generalRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/gallery", galleryRouter);
app.use("/api/v1/services", serviceRouter);
app.use("/api/v1/team", teamRouter);
/*--- Initial Listening PORT of app --- */
app.listen(PORT, () => {
  console.log(`Backend connected at ${PORT}`);
});
