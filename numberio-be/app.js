const express = require("express");
const moongoose = require("mongoose");
const port = 4000;
const app = express();

//connect database
const connectDB = async () => {
  try {
    await moongoose.connect(
      "mongodb+srv://shinobihao2001:4aqZ56MycMDOtk08@numberiobe.tfoooql.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connect DB successfully");
  } catch (error) {
    console.log("Mongoose Error:", error);
    process.exit(1);
  }
};
connectDB();
///////////////////////

///////
//temporary router index
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const questionRoute = require("./question/questionRouter");
app.use("/question", questionRoute);

const signinRouter = require('./routes/signin.route');
///

app.get("/", (req, res) => {
  res.send("Hello world 22");
});

app.use("/signin", signinRouter);

app.listen(process.env.PORT || port, () => {
  console.log(
    `Numberio is runing on  http://localhost:${process.env.PORT || port}`
  );
});
