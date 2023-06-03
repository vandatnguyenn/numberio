const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamSessionSchema = new Schema({
  // either gameId or examId
  examId: {
    type: mongoose.Types.ObjectId,
    ref: 'Exam',
  },
  token: {
    type: String,
  },
  status: {
    type: Boolean, // true, false (used or not)
    default: false,
  },
  email: {
    type: String,
  },
});

ExamSessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const ExamSessionModel = mongoose.model('ExamSession', ExamSessionSchema);
module.exports = ExamSessionModel;
