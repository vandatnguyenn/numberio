const { default: mongoose } = require('mongoose');
const GameModel = require('../../models/gameModel');
const questionService = require('../../utils/gRPC/services/questionService');

const generateGameSessionData = async (total, level, token) => {
  let levelAsNumber = 1;
  switch (level) {
    case 'easy':
      levelAsNumber = 1;
      break;
    case 'medium':
      levelAsNumber = 2;
      break;
    case 'hard':
      levelAsNumber = 3;
      break;
    default:
      levelAsNumber = 1;
      break;
  }

  const questions = await questionService.randomQuestions(
    total,
    levelAsNumber,
    token
  );
  const objectIds = questions.map((question) =>
    mongoose.Types.ObjectId(question.id)
  );

  return objectIds;
};

const calculateResult = (gameSessionObj, answers) => {
  let score = 0;
  const selectionResult = [];
  const questions = gameSessionObj.questions;

  for (let i = 0; i < questions.length; i++) {
    if (answers[i] && questions[i].correctAnswer === answers[i]) {
      score++;
      selectionResult.push(true);
    } else {
      selectionResult.push(false);
    }
  }

  return { score, selectionResult, answers };
};

// gameSession as doc
const generateHistory = async (gameSession, gameResult) => {
  const { score, answers } = gameResult;
  const game = await GameModel.findById(gameSession.gameId.toString());

  const result = {
    gameId: gameSession.gameId,
    questions: gameSession.questions,
    description: `Attempt playing game: ${game.name}, level: ${gameSession.level}`,
    type: 'game',
    level: gameSession.level,
    score,
    answers,
    email: gameSession.email,
  };

  return result;
};

module.exports = {
  generateGameSessionData,
  calculateResult,
  generateHistory,
};
