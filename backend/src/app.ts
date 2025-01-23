import express from "express";
import routes from "./routes";
import { dbConnection } from "./config/db";

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

dbConnection();

app.use("/api", routes);

export default app;
