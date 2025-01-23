import mongoose from "mongoose";
import { env } from "./env";

export const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("✅ Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
  }
};