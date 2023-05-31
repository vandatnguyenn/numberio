const client = require('../client');

const getAllQuestions = async () => {
  const promise = new Promise((resolve, reject) =>
    client.getAllQuestions({}, (error, response) => {
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

const getQuestionPage = async (pageInfo) => {
  const promise = new Promise((resolve, reject) =>
    client.getQuestionPage(pageInfo, (error, response) => {
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

const createQuestion = async (newQuestion) => {
  const promise = new Promise((resolve, reject) =>
    client.createQuestion(newQuestion, (error, response) => {
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

const updateQuestion = async (updatedQuestion) => {
  const promise = new Promise((resolve, reject) => {
    client.updateQuestion(updatedQuestion, (error, response) => {
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

const getQuestionById = async (questionId) => {
  const promise = new Promise((resolve, reject) => {
    client.getQuestionById({ id: questionId }, (error, response) => {
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

const deleteQuestion = async (questionId) => {
  const promise = new Promise((resolve, reject) => {
    client.deleteQuestion({ id: questionId }, (error, response) => {
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

const randomQuestions = async (total = 0, difficulty) => {
  const promise = new Promise((resolve, reject) => {
    client.randomQuestions({ total, difficulty }, (error, response) => {
      if (!error) {
        resolve(response.questions);
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

module.exports = {
  getAllQuestions,
  createQuestion,
  getQuestionPage,
  updateQuestion,
  getQuestionById,
  deleteQuestion,
  randomQuestions,
};
