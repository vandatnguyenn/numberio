const DEFAULT_PER_PAGE = 10;

const questionSchema = require('../../models/questionSchema');
const responseCode = require('../responseCode');
const { extractUser, authorizeUser, authorizeAdmin } = require('./helper');

const verifyUser = (_, callback) => {
  extractUser(_, callback);
  authorizeUser(_, callback);
};

const verifyAdmin = (_, callback) => {
  extractUser(_, callback);
  authorizeAdmin(_, callback);
};

const verifyGameSessionToken = (_, callback) => {
  verifyGameSessionToken(_, callback);
};

const toObjectQuestions = (questions) => {
  return questions.map((question) => {
    question.id = question._id.toString();
    delete question._id;
    delete question.__v;

    return question;
  });
};

const getAllQuestions = async (_, callback) => {
  verifyUser(_, callback);
  const user = extractUser(_, callback);
  if (authorizeUser(user)) {
  }

  const questions = await questionSchema.find({});

  const toObject = questions.map((question) => question.toObject());

  const returnedObject = {
    questions: toObject,
  };
  callback(null, returnedObject);
};

const getQuestionPage = async (_, callback) => {
  verifyUser(_, callback);
  let { _page, _perpage, _difficulty, _orderAsc } = _.request;
  let { page, perpage, difficulty, orderAsc } = _.request;
  let difficultyFilter = {};

  if (!_page || page <= 0) {
    page = 1;
  }

  if (!_perpage) {
    perpage = DEFAULT_PER_PAGE;
  }

  if (_orderAsc) {
    if (orderAsc) {
      orderAsc = 1;
    } else orderAsc = -1;
  }

  if (_difficulty) {
    difficultyFilter = { difficulty };
  }

  try {
    const totalCount = await questionSchema.count({});
    const questions = await questionSchema
      .find(difficultyFilter)
      .skip(perpage * (page - 1))
      .limit(perpage)
      .sort({ createAt: orderAsc });

    const toObjQuestions = questions.map((question) => question.toObject());

    const returnedObject = {
      totalCount,
      page,
      perpage,
      pageCount: toObjQuestions.length,
      questions: toObjQuestions,
    };

    callback(null, returnedObject);
  } catch (err) {
    console.log(err);
    callback({ code: responseCode.FAILED, message: 'failed to get questions' });
  }
};

const createQuestion = async (_, callback) => {
  verifyAdmin(_, callback);
  const newQuestion = _.request;

  try {
    const addResult = await questionSchema.create(newQuestion);
    callback(null, addResult.toObject());
  } catch (err) {
    callback({
      code: responseCode.FAILED,
      message: 'Failed to add new question',
    });
  }
};

const getQuestionById = async (_, callback) => {
  verifyUser(_, callback);
  const { id } = _.request;

  try {
    const findResult = await questionSchema.findById(id);
    if (findResult) {
      callback(null, findResult.toObject());
    } else {
      callback({ code: responseCode.FAILED, message: 'Question not found' });
    }
  } catch (err) {
    callback({ code: responseCode.FAILED, message: 'Failed to get question' });
  }
};

const updateQuestion = async (_, callback) => {
  verifyAdmin(_, callback);
  const updatedQuestion = _.request;

  try {
    const updateResult = await questionSchema.findByIdAndUpdate(
      updatedQuestion.id,
      updatedQuestion,
      {
        new: true,
        runValidators: true,
        context: 'query',
      }
    );

    if (updateResult) {
      callback(null, updateResult);
    } else
      callback({
        code: responseCode.FAILED,
        message: 'Failed to update question',
      });
  } catch (err) {
    callback({
      code: responseCode.FAILED,
      message: 'Failed to update question',
    });
  }
};

const deleteQuestion = async (_, callback) => {
  verifyAdmin(_, callback);
  const { id } = _.request;

  try {
    const deleteResult = await questionSchema.findByIdAndDelete(id);
    if (deleteResult) {
      callback(null, {});
    } else {
      callback({ code: responseCode.FAILED, message: 'Question not found' });
    }
  } catch (err) {
    callback({
      code: responseCode.FAILED,
      message: 'Faield to delete question',
    });
  }
};

const randomQuestions = async (_, callback) => {
  verifyGameSessionToken(_, callback);
  const { _difficulty, _total, total, difficulty } = _.request;

  if (!_total || total < 0) {
    total = 0;
  }

  try {
    const randomQuestionsRs = await questionSchema.aggregate(
      !_difficulty
        ? [{ $sample: { size: total } }]
        : [{ $match: { difficulty } }, { $sample: { size: total } }]
    );

    if (randomQuestionsRs) {
      const randomQuestionsObj = toObjectQuestions(randomQuestionsRs);
      callback(null, { questions: randomQuestionsObj });
    } else {
      callback({
        code: responseCode.FAILED,
        message: 'Failed to get random questions',
      });
    }
  } catch (error) {
    callback({
      code: responseCode.FAILED,
      message: 'Failed to get random questions',
    });
  }
};

const questionService = {
  getAllQuestions,
  createQuestion,
  getQuestionPage,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
  randomQuestions,
};

module.exports = questionService;
