import express from "express";
import routes from "./routes";
import { dbConnection } from "./config/db";
import cloudinaryRoutes from "./routes/cloudinary.routes";
import comicRoutes from "./routes/comic.routes";
import chapterRoutes from "./routes/chapter.routes";
import categoryRoutes from "./routes/category.routes";


const app = express();

app.use(express.json());

dbConnection();

app.use("/api", routes);
app.use("/api", cloudinaryRoutes);
app.use("/api", comicRoutes);
app.use("/api", chapterRoutes);
app.use("/api", categoryRoutes);

export default app;
