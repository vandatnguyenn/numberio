const express = require("express");
const moongoose = require("mongoose");
const port = 3000;
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

app.get("/", (req, res) => {
  res.send("Hello world 22");
});

app.listen(process.env.PORT || port, () => {
  console.log(
    `Numberio is runing on  http://localhost:${process.env.PORT || port}`
  );
});
