require('dotenv').config();

const PORT = process.env.PORT || 3001;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const GAME_SESSION_SECRET = process.env.GAME_SESSION_SECRET;
const GRPC_BE_URL = process.env.GRPC_BE_URL;
const KEYCLOAK_PUBLIC_KEY = process.env.KEYCLOAK_PUBLIC_KEY;
const REDIS_URL = process.env.REDIS_URL;

module.exports = {
  PORT,
  MONGO_DB_URL,
  GAME_SESSION_SECRET,
  GRPC_BE_URL,
  KEYCLOAK_PUBLIC_KEY,
  REDIS_URL,
};
