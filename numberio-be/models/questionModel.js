const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
  description: {
    type: String,
  },

  answers: [{ type: String }],

  // example [A,B,C,D], A correct => correctAnswer: 1
  correctAnswers: {
    type: Number,
  },
  explaination: {
    type: String,
  },
  difficulty: {
    type: Number,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },

  active: {
    type: Boolean,
    default: true,
  },
});

questionSchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Question', questionSchema);
