const examSessionController = require('../controllers/examSessionController');

const examSessionRouter = require('express').Router();

examSessionRouter.post('/', gameSessionController.postGameSession);

// does modify data
examSessionRouter.put('/getData/:id', examSessionController.getGameSessionData);

module.exports = examSessionController;
