const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, MONGO_DB_URL } = require('./utils/config');

const app = express();
// const accountRouter = require("./routes/accountRouter");
// const questionRoute = require("./routes/questionRouter");
// const signinRouter = require("./routes/signin.route");

const gameRouter = require('./routes/gameRouter');
const examRouter = require('./routes/examRouter');
const gameSessionRouter = require('./routes/gameSessionRouter');
const HistoryModel = require('./models/historyModel');

mongoose.set('strictQuery', false);
//connect database
// const connectDB = async () => {
//   try {
//     await moongoose.connect(MONGO_DB_URL);
//     console.log('Connect DB successfully');
//   } catch (error) {
//     console.log('Mongoose Error:', error);
//     process.exit(1);
//   }
// };
// connectDB();
// moongoose.set('strictQuery', false);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });
///////////////////////

///////
//temporary router index
var bodyParser = require('body-parser');
const requestLogger = require('./middlewares/requestLogger');
const questionRouter = require('./routes/questionRouter');
app.use(cors());
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  // res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// app.use('/question', questionRoute);
///

app.use(requestLogger);

app.use('/api/game', gameRouter);
// this api is under development
app.use('/api/exam', examRouter);
app.use('/api/gameSession', gameSessionRouter);
app.use('/api/question', questionRouter);

// temp api for unit test - moving to graphql for history query
app.get('/api/history', async (req, res) => {
  const result = await HistoryModel.find({});
  return res.status(200).json(result);
});

app.get('/', (req, res) => {
  res.send(`Hello world ${PORT}`);
});

module.exports = app;
