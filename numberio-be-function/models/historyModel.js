const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const historySchema = new Schema({
  exam_id: {
    type: String,
  },
  answers: {
    //là các đáp án user đã ghi nhận sau đó check vói correct answer trong examid, lấy điểm lưu vào trường score
    type: Array,
  },
  score: {
    type: int,
  },
});
module.exports = historySchema;
// lịch sử thi của mỗi user sẽ được lưu lại
