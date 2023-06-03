const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const historySchema = new Schema({
  user_id: {
    type: String,
  },
  typeOfGame: {
    type: Number,
  },
  answers: {
    //là các đáp án user đã ghi nhận sau đó check vói correct answer trong examid, lấy điểm lưu vào trường score
    type: Array,
  },
  score: {
    type: Number,
  },
});
const HistoryModel = mongoose.model("history", historySchema);
module.exports = HistoryModel;
// lịch sử thi của mỗi user sẽ được lưu lại
