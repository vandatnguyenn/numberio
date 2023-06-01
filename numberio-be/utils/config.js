require('dotenv').config();

const PORT = process.env.PORT || 3001;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const GAME_SESSION_SECRET = process.env.GAME_SESSION_SECRET;

module.exports = {
  PORT,
  MONGO_DB_URL,
  GAME_SESSION_SECRET,
};
