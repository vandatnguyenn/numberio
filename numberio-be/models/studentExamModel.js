const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentExamSchema = new Schema({
  studentID: {
    type: String,
  },
  examID: {
    type: String,
  },
  scores: [
    {
      type: int,
    },
  ],
  createAt: {
    type: Date,
    default: Date.now(),
  },
  deleted: {
    type: Boolean,
  },
});

const studentExamModel = mongoose.model("studentExam", studentExamSchema);
module.exports = studentExamModel;
