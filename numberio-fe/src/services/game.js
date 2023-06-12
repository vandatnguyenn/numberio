import axios from 'axios';
import config from '../utils/config';

const getAllGames = async (token) => {
  const result = await axios.get(`${config.REST_URL}/api/game/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return result.data;
};

const startGameSession = async (gameId, level, token) => {
  const result = await axios.post(
    `${config.REST_URL}/api/gameSession`,
    { gameId, level },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return result.data;
};

const gameService = {
  getAllGames,
  startGameSession,
};

export default gameService;
