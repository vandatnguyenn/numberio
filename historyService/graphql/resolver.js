const historySchema = require('../models/historyModel');
const { GraphQLScalarType } = require('graphql');
const questionModel = require('../models/questionModel');
const resolvers = {
  Query: {
    histories: async (parent, { limit, skip = 0 }, context) => {
      const userEmail = context.email;
      if (!limit || limit < 0) {
        const result = await historySchema
          .find({ email: userEmail })
          .populate({ path: 'questions', model: questionModel });
        return {
          data: result,
          totalAll: result.length,
          totalResult: result.length,
        };
      } else {
        const totalRecord = await historySchema.count({ email: userEmail });
        const result = await historySchema
          .find({ email: userEmail })
          .skip(skip)
          .limit(limit)
          .populate({ path: 'questions', model: questionModel });
        return {
          data: result,
          totalAll: totalRecord,
          totalResult: result.length,
        };
      }
    },
    getHistory: async (parent, { id }) => {
      return await historySchema
        .findById(id)
        .populate({ path: 'questions', model: questionModel });
    },
  },
};

module.exports = resolvers;
