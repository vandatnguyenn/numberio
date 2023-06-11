const GameSessionModel = require('../models/gameSessionModel');
const jwt = require('jsonwebtoken');

const { GAME_SESSION_SECRET } = require('../utils/config');
const { default: mongoose } = require('mongoose');
const HistoryModel = require('../models/historyModel');
const GameModel = require('../models/gameModel');
const {
  generateGameSessionData,
  calculateResult,
  generateHistory,
} = require('./utils/gameSession');

const gameSessionController = {
  postGameSession: async (req, res, next) => {
    try {
      const token = req.user.token;
      //   const email = req.user.email;
      const email = req.user.email;
      const { gameId, level } = req.body;
      const questions = await generateGameSessionData(5, level, token);
      const gameExist = await GameModel.findById(gameId);
      if (!gameExist) {
        return res.status(400).send();
      }

      const newGameSession = new GameSessionModel({
        gameId,
        level,
        email,
        questions,
      });
      const gameSessionToken = jwt.sign(
        { gameSessionId: newGameSession._id.toString() },
        GAME_SESSION_SECRET
      );
      newGameSession.token = gameSessionToken;
      const saveNewSessionRs = await newGameSession.save();
      return res.status(201).json({
        message: 'created new session',
        email,
        token: gameSessionToken,
        gameUrl: gameExist.gameUrl,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getGameSessionData: async (req, res, next) => {
    try {
      const token = req.params.token;
      const { gameSessionId } = jwt.verify(token, GAME_SESSION_SECRET);

      if (!gameSessionId) {
        return res.status(400).send();
      }

      const findGameSession = await GameSessionModel.findById(
        gameSessionId
      ).populate('questions', { description: 1, answers: 1 });
      if (!findGameSession || findGameSession.status === true) {
        return res
          .status(400)
          .json({ message: 'Invalid token or session used' });
      } else {
        const updatedSessionObj = {
          gameId: findGameSession.gameId,
          questions: findGameSession.questions,
          email: findGameSession.email,
          token: findGameSession.token,
          level: findGameSession.level,
          status: true,
        };
        const updateSession = await GameSessionModel.findByIdAndUpdate(
          findGameSession._id.toString(),
          updatedSessionObj,
          {
            new: true,
            runValidators: true,
            context: 'query',
          }
        );

        const responseObj = {
          questions: findGameSession.questions.map((question) => {
            const formattedQuestion = {
              id: question._id,
              description: question.description,
              answers: question.answers,
            };

            return formattedQuestion;
          }),

          gameId: findGameSession.gameId,
          level: findGameSession.level,
          email: findGameSession.email,
          id: findGameSession.id,
        };
        return res.status(200).json(responseObj);
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  recordHistory: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { userAnswers } = req.body;
      const gameSession = await GameSessionModel.findById(id).populate(
        'questions'
      );

      // if (req.user.email !== gameSession.email) {
      //   return res.status(401).send();
      // }

      if (gameSession) {
        const result = calculateResult(gameSession.toObject(), userAnswers);
        const newHistory = await generateHistory(gameSession, result);
        const history = new HistoryModel(newHistory);
        const saveHistory = await history.save();

        return res.status(201).json({
          score: result.score,
          selectionResult: result.selectionResult,
          questions: gameSession.toObject().questions,
        });
      } else return res.status(404).json({ message: 'Session not found' });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

module.exports = gameSessionController;
