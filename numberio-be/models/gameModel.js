const { model } = require("mongoose");

const mongoose = reuqire("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  descriptionn: {
    type: String,
  },
  typeofGame: {
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
  },
});

const GameModel = mongoose.model("game", GameSchema);
module.exports = GameModel;
