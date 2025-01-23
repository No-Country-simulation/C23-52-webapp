import express from "express";
import routes from "./routes";
import { dbConnection } from "./config/db";
import cloudinaryRoutes from "./routes/cloudinary.routes";

const app = express();

app.use(express.json());

dbConnection();

app.use("/api", routes);
app.use("/api", cloudinaryRoutes);

export default app;
