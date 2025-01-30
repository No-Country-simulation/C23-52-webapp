import express from "express";
import routes from "./routes";
import { dbConnection } from "./config/db";
import cloudinaryRoutes from "./routes/cloudinary.routes";
import comicRoutes from "./routes/comic.routes";
import chapterRoutes from "./routes/chapter.routes";
import categoryRoutes from "./routes/category.routes";
import cookieParser from "cookie-parser";
// import cors from "cors";

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

dbConnection();

app.use("/api", routes);
app.use("/api", cloudinaryRoutes);
app.use("/api", comicRoutes);
app.use("/api", chapterRoutes);
app.use("/api", categoryRoutes);

export default app;
