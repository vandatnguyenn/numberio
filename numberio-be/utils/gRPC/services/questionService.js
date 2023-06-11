const client = require('../client');
const grpc = require('@grpc/grpc-js');
const getAllQuestions = async (token) => {
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  const promise = new Promise((resolve, reject) =>
    client.getAllQuestions({}, metadata, (error, response) => {
      if (!error) {
        resolve(response.questions);
      } else reject(error);
    })
  );

  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getQuestionPage = async (pageInfo, token) => {
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  const promise = new Promise((resolve, reject) =>
    client.getQuestionPage(pageInfo, metadata, (error, response) => {
      if (!error) {
        resolve(response);
      } else reject(error);
    })
  );

  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const createQuestion = async (newQuestion, token) => {
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  const promise = new Promise((resolve, reject) =>
    client.createQuestion(newQuestion, metadata, (error, response) => {
      if (!error) {
        resolve(response);
      } else reject(error);
    })
  );

  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateQuestion = async (updatedQuestion, token) => {
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  const promise = new Promise((resolve, reject) => {
    client.updateQuestion(updatedQuestion, metadata, (error, response) => {
      if (!error) {
        resolve(response);
      } else reject(error);
    });
  });

  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getQuestionById = async (questionId, token) => {
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  const promise = new Promise((resolve, reject) => {
    client.getQuestionById({ id: questionId }, metadata, (error, response) => {
      if (!error) {
        resolve(response);
      } else reject(error);
    });
  });

  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteQuestion = async (questionId, token) => {
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  const promise = new Promise((resolve, reject) => {
    client.deleteQuestion({ id: questionId }, metadata, (error, response) => {
      if (!error) {
        resolve(response);
      } else reject(error);
    });
  });

  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const randomQuestions = async (total = 0, difficulty, token) => {
  const metadata = new grpc.Metadata();
  metadata.add('authorization', token);
  const promise = new Promise((resolve, reject) => {
    client.randomQuestions(
      { total, difficulty },
      metadata,
      (error, response) => {
        if (!error) {
          resolve(response.questions);
        } else reject(error);
      }
    );
  });

  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllQuestions,
  createQuestion,
  getQuestionPage,
  updateQuestion,
  getQuestionById,
  deleteQuestion,
  randomQuestions,
};
