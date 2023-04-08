const Questions = require("./questionModel.js");

exports.addQuestion = async (req, res) => {
  const { Description, Answers, WrongAnswers, Difiicultly } = req.body;
  try {
    const newQuestion = new Questions({
      description: Description,
      answers: Answers,
      wrongAnswers: WrongAnswers,
      difficulty: Difiicultly,
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
