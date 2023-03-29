const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  deleted: {
    type: Boolean,
  },
  role: {
    type: String,
  },
});

const AccountModel = mongoose.model("account", AccountSchema);
module.exports = AccountModel;
