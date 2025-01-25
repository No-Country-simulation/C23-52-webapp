import express from "express";
import routes from "./routes";
import { dbConnection } from "./config/db";
import cookieParser from "cookie-parser";

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

export default app;
