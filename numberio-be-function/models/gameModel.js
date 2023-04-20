const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  typeOfGame: {
    type: Number,
  },
  //   questionQuanity: {
  //     type: Number,
  //   },
  gameURL: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const GameModel = mongoose.model("game", GameSchema);
module.exports = GameModel;
