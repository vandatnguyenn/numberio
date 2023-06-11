import { gql } from '@apollo/client';

const histories = (limit, skip) => {
  return gql`
    query Histories {
      histories(limit: 1, skip: 0) {
        data {
          id
          gameId
          description
          answers
          type
          score
          email
          questions {
            description
            answers
            correctAnswer
            difficulty
            explaination
            id
          }
        }
        totalAll
        totalResult
      }
    }
  `;
};

const historyService = {
  histories,
};

export default historyService;
