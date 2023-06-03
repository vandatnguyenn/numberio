const HistoryModel = require("../models/historyModel");
const mongdoDataMethods = {
  getAllHistories: async () => await HistoryModel.find(),
  findHistoryById: async (id) => await HistoryModel.findById(id),
};
module.exports = mongdoDataMethods;
