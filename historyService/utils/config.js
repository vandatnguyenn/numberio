require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT | 4000;
const KEYCLOAK_PUBLIC_KEY = process.env.KEYCLOAK_PUBLIC_KEY;
module.exports = {
  MONGO_DB_URL,
  PORT,
  KEYCLOAK_PUBLIC_KEY,
};
