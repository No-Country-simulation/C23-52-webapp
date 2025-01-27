import express from "express";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import routes from "./routes";
import { dbConnection } from "./config/db";

const app = express();

app.use(express.json());

dbConnection();

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", routes);

export default app;
