const resolvers = {
  Query: {
    histories: async (parent, args, { mongdoDataMethods }) => {
      return await mongdoDataMethods.getAllHistories();
    },
    history: async (parent, { id }, { mongdoDataMethods }) => {
      return await mongdoDataMethods.findHistoryById(id);
    },
  },
};
module.exports = resolvers;
