const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({
  gameID: {
    type: mongoose.Types.ObjectId,
    ref: 'Question',
  },
  questions: [{ type: mongoose.Types.ObjectId, ref: 'Question' }],
  description: {
    type: String,
  },
  timer: {
    type: Number,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const ExamModel = mongoose.model('Exam', ExamSchema);
module.exports = ExamModel;
