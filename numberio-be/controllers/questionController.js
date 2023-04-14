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
