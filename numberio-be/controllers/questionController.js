const Questions = require("../models/questionModel");

exports.addQuestion = async (req, res) => {
  const { Description, Answers, WrongAnswers, Difficulty } = req.body;
  try {
    const newQuestion = new Questions({
      description: Description,
      answers: Answers,
      wrongAnswers: WrongAnswers,
      difficulty: Difficulty,
    });

    await newQuestion.save();
    console.log("Add new question successfully!");
    res.status(200).json({
      message: "Add new question successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "add question failed",
    });
  }
};
exports.updateQuestion = (req, res) => {
  try {
    const { id, description, answers, wrongAnswers, difficulty } = req.body;
    const question = Questions.findByIdAndUpdate(id, {
      description,
      answers,
      wrongAnswers,
      difficulty,
    });
    if (!question)
      return res.status(400).json({ message: "question is not exist" });
    return res.status(200).json({ message: "updated question" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.delQuestion = async (req, res) => {
  try {
    let question = await Questions.findByIdAndDelete(req.params.id);
    if (!question) res.status(400).json({ message: "question is not exist" });
    return res.status(200).json({ message: "deleted question" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getQuestions = async (req, res) => {
  const { QuestionQuanity, Difficulty } = req.body;
  //console.log(Difficulty);
  try {
    const arrayQuestions = await Questions.find({
      difficulty: Difficulty,
    }).exec();

    //console.log(arrayQuestions);
    arrayQuestions.sort(() => Math.random() - 0.5);
    const result = arrayQuestions.slice(0, QuestionQuanity);

    res.status(200).json({
      arrayQuestions: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "get question failed",
    });
  }
};
