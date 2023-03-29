const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExamSchema = new Schema({
  ownerID: {
    type: String,
  },
  gameID: [
    {
      type: String,
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

const AccountModel = mongoose.model("account", AccountSchema);
module.exports = AccountModel;
