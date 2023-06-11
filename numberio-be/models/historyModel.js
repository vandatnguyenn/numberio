const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  gameId: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
  },
  description: {
    type: String,
  },
  questions: [{ type: mongoose.Types.ObjectId, ref: 'Question' }],
  email: {
    type: String,
  },
  answers: [{ type: Number }],
  type: {
    type: String,
    enum: ['exam', 'game'],
  },
  level: {
    type: String,
    enum: ['easy', 'medium', 'hard', 'exam level'],
  },
  score: {
    type: Number,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

HistorySchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const HistoryModel = mongoose.model('History', HistorySchema);

module.exports = HistoryModel;
