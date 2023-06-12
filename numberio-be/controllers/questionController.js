const Questions = require('../models/questionModel');
const questionService = require('../utils/gRPC/services/questionService');
exports.addQuestion = async (req, res, next) => {
  const newQuestion = req.body;
  const token = req.user.token;
  try {
    const result = await questionService.createQuestion(newQuestion, token);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).send();
  }
};

exports.updateQuestion = async (req, res, next) => {
  try {
    const result = await questionService.updateQuestion(
      req.body,
      req.user.token
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).send();
  }
};

// dont del question
exports.delQuestion = async (req, res, next) => {};

exports.getQuestions = async (req, res, next) => {
  // page, perpage, difficulty, orderAsc
  let page = req.query.page;
  let perpage = req.query.perpage;
  let difficulty = req.query.difficulty;
  let orderAsc = req.query.orderAsc;

  console.log(perpage);
  try {
    const result = await questionService.getQuestionPage(
      { page, perpage, difficulty, orderAsc },
      req.user.token
    );
    console.log(result);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).send();
  }
};
