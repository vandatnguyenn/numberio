const ExamModel = require('../models/examModel');
const GameModel = require('../models/gameModel');
const QuestionModel = require('../models/questionModel');
const examController = {
  postExam: async (req, res) => {
    try {
      let gameData = await GameModel.findOne({ _id: req.body.game_id });
      let questions = await QuestionModel.find({
        difficulty: gameData.typeOfGame,
      });
      questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
      let newExam = new ExamModel({
        ownerID: req.body.user_id,
        gameID: req.body.game_id,
        questions: questions,
      });
      await newExam.save();
      res.status(201).json({ message: 'created Exam', id: newExam._id });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getExam: async (req, res) => {
    try {
      let exam = await ExamModel.findById(req.params.id);
      if (!exam) res.status(400).json({ message: 'Exam is not exists' });
      return res.status(200).json(exam);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAllExam: async (req, res, next) => {
    try {
      const exams = await ExamModel.find({});
      return res.status(200).json(exams);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  updateExam: async (req, res, next) => {
    try {
      const examId = req.params.id;
      const updatedQuestion = req.body;

      const updatedQuestionRs = await ExamModel.findByIdAndUpdate(
        examId,
        updatedQuestion,
        {
          new: true,
          runValidators: true,
          context: 'query',
        },
        function (err, model) {
          if (!model) {
            return res.status(400).json({ message: 'Exam not found' });
          } else return model;
        }
      );

      return res.status(200).json(updatedQuestionRs);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
module.exports = examController;
