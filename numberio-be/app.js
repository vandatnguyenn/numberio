const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world 22");
});

app.listen(process.env.PORT || port, () => {
  console.log(
    `Numberio is runing on  http://localhost:${process.env.PORT || port}`
  );
});
