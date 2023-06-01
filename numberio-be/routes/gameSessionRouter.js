const gameSessionController = require('../controllers/gameSessionController');

const gameSessionRouter = require('express').Router();

gameSessionRouter.post('/', gameSessionController.postGameSession);

// does modify data
gameSessionRouter.put(
  '/getData/:token',
  gameSessionController.getGameSessionData
);
gameSessionRouter.post('/record/:id', gameSessionController.recordHistory);

module.exports = gameSessionRouter;
