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
});

const AccountModel = mongoose.model("account", AccountSchema);
module.exports = AccountModel;
