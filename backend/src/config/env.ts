import dotenv from "dotenv";

dotenv.config();

interface EnvVariables {
  PORT: number;
  MONGODB_URI: string;
  DOMAIN_AUTH0: string;
  AUDIENCE_AUTH0: string;
}

export const env: EnvVariables = {
  PORT: parseInt(process.env.PORT || "3000"),
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/ruminet",
  DOMAIN_AUTH0: process.env.DOMAIN_AUTH0 || "TU_DOMINIO_AUTH0",
  AUDIENCE_AUTH0: process.env.AUDIENCE_AUTH0 || "TU_AUDIENCIA_AUTH0",
};
