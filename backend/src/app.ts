import express from "express";
import routes from "./routes";
import { dbConnection } from "./config/db";


const app = express();

app.use(express.json());

dbConnection();

app.use("/api", routes);

export default app;
