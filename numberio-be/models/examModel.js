const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExamSchema = new Schema({
  ownerID: {
    type: String,
  },
  gameID: {
    type: String,
  },
  questions: {
    type: Array //list câu hỏi dc láy tương ứng từ trường gameModel(độ khó, số lượng câu hỏi, đề tài)
  },
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

const ExamModel = mongoose.model("exam", ExamSchema);
module.exports = ExamModel;
