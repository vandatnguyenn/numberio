const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD
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
=======
const HistorySchema = new Schema({
  gameId: {
    type: Schema.Types.ObjectId,
    ref: 'Game',
  },
  description: {
    type: String,
  },
  questions: [{ type: mongoose.Types.ObjectId, ref: 'Question' }],
  answers: [{ type: Number }],
  type: {
    type: String,
    enum: ['exam', 'game'],
  },
  level: {
    type: String,
    enum: ['easy', 'medium', 'hard', 'exam level'],
  },
  score: {
    type: Number,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
});

HistorySchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const HistoryModel = mongoose.model('History', HistorySchema);

module.exports = HistoryModel;
>>>>>>> 45b6950cd67427cbb7489b1d28ef26575c605cf9
