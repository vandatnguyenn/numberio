const { gql } = require("apollo-server");

const typeDefs = gql`
  type History {
    id: ID
    user_id: ID
    answers: [String]
    typeOfGame: Int
    score: Int
  }
  type Query {
    history(id: ID!): History
    histories: [History]
  }
`;
module.exports = typeDefs;
