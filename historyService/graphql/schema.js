const { gql } = require('apollo-server');

const typeDefs = gql`
  type Question {
    id: ID
    description: String
    answers: [String]
    correctAnswer: Int
    difficulty: Int
    explaination: String
    createAt: String
  }
  type Histories {
    data: [History]
    totalAll: Int
    totalResult: Int
  }
  type History {
    id: ID
    gameId: String
    description: String
    answers: [Int]
    questions: [Question]
    type: String
    score: Int
    email: String
  }
  type Query {
    getHistory(id: ID!): History
    histories(limit: Int, skip: Int): Histories
  }
`;
module.exports = typeDefs;
