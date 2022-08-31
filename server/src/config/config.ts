import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  origin: process.env.ORIGIN || "*",
  db_uri: process.env.DB_URI || "mysql://root:admin@localhost:3306/lpchat",
  JWT_KEY: process.env.JWT_KEY || "top_scret",
};

export default config;
