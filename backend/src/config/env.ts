import dotenv from "dotenv";

dotenv.config();

interface EnvVariables {
    PORT: number;
    MONGODB_URI: string;
}

export const env: EnvVariables = {
    PORT: parseInt(process.env.PORT || "3000"),
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/ruminet"
};
