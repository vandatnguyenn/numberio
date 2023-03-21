const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.json("Welcome to Numberio's server");
});

module.exports = app;
