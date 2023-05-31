const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  gameUrl: {
    type: String,
  },
  // typeOfGame: {
  //   type: Number,
  // },
  //   questionQuanity: {
  //     type: Number,
  //   },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  active: {
    type: Boolean,
    default: false,
  },
});

GameSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    console.log(returnedObject._id);
    returnedObject.id = returnedObject._id;

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const GameModel = mongoose.model('Game', GameSchema);
module.exports = GameModel;
