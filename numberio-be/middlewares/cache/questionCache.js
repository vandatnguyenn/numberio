const getAsync = require('./redis').getAsync;
const delAsync = require('./redis').delAsync;

const questionCache = {
    getAllQuestions: async (req, res, next) => {
        try {
            const questions = await getAsync('questions');
            if (questions) {
                return res.status(200).json(JSON.parse(questions));
            }
            next();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getQuestionByLevel: async (req, res, next) => {
        try {
            const level = req.params.level;
            const questions = await getAsync(`questions:${level}`);
            if (questions) {
                return res.status(200).json(JSON.parse(questions));
            }
            next();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    clearCache: async (req, res, next) => {
        try {
            await delAsync('questions');
            await delAsync(`questions:${req.params.level}`);
            next();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
};

module.exports = questionCache;