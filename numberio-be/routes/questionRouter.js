const express = require('express');
const questionController = require('../controllers/questionController');
const questionRouter = express.Router();
const keycloak = require('../middlewares/authentication/keycloak');
const { authorizeAdmin } = require('../middlewares/authorization');
// re-use questionService
questionRouter.post(
  '/',
  keycloak.extractUser,
  authorizeAdmin,
  questionController.addQuestion
);
questionRouter.get(
  '/',
  keycloak.extractUser,
  authorizeAdmin,
  questionController.getQuestions
);
questionRouter.put(
  '/',
  keycloak.extractUser,
  authorizeAdmin,
  questionController.updateQuestion
);

module.exports = questionRouter;
