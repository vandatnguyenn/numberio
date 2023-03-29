const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  description: {
    type: String,
  },
  answers: [
    {
      type: String,
    },
  ],
  wrongAnswers: [
    {
      type: String,
    },
  ],
  difficulty: {
    type: int,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  deleted: {
    type: Boolean,
  },
});

const QuestionModel = mongoose.model("question", QuestionSchema);
module.exports = QuestionModel;
