const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_DB_URL } = require('./utils/config');

const app = express();
const accountRouter = require('./routes/accountRouter');
const questionRoute = require('./routes/questionRouter');
const signinRouter = require('./routes/signin.route');
const gameRouter = require('./routes/gameRouter');
const examRouter = require('./routes/examRouter');
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
app.use('/question', questionRoute);
///
app.use('/signin', signinRouter);
app.use('/account', accountRouter);
app.use('/game', gameRouter);
app.use('/exam', examRouter);

app.get('/', (req, res) => {
  res.send(`Hello world ${PORT}`);
});

module.exports = app;
