const gameSessionController = require('../controllers/gameSessionController');

const gameSessionRouter = require('express').Router();
const keycloak = require('../middlewares/authentication/keycloak');
gameSessionRouter.post(
  '/',
  keycloak.extractUser,
  gameSessionController.postGameSession
);

// does modify data
gameSessionRouter.put(
  '/getData/:token',
  keycloak.extractUser,
  gameSessionController.getGameSessionData
);
gameSessionRouter.post(
  '/record/:id',
  keycloak.extractUser,
  gameSessionController.recordHistory
);

module.exports = gameSessionRouter;
