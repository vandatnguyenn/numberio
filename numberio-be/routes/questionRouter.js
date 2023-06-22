const express = require('express');
const questionController = require('../controllers/questionController');
const questionRouter = express.Router();
const keycloak = require('../middlewares/authentication/keycloak');
const { authorizeAdmin } = require('../middlewares/authorization');
const questionCache = require('../middlewares/cache/questionCache');
// re-use questionService
questionRouter.post(
  '/',
  keycloak.extractUser,
  authorizeAdmin,
  questionCache.clearCache,
  questionController.addQuestion
);
questionRouter.get(
  '/',
  keycloak.extractUser,
  authorizeAdmin,
  questionCache.getAllQuestions,
  questionController.getQuestions
);
questionRouter.put(
  '/',
  keycloak.extractUser,
  authorizeAdmin,
  questionCache.clearCache,
  questionController.updateQuestion
);

module.exports = questionRouter;
