const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSessionSchema = new Schema({
  // either gameId or examId
  gameId: {
    type: mongoose.Types.ObjectId,
    ref: 'Game',
  },
  token: {
    type: String,
  },
  questions: [{ type: mongoose.Types.ObjectId, ref: 'Question' }],
  level: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'easy',
  },
  status: {
    type: Boolean, // true, false (used or not)
    default: false,
  },
  email: {
    type: String,
  },
});

GameSessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

GameSessionSchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const GameSessionModel = mongoose.model('GameSession', GameSessionSchema);
module.exports = GameSessionModel;
