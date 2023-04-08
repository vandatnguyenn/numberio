const express = require("express");
const questionController = require("./questionController.js");
const router = express.Router();

router.post("/addQuestion", questionController.addQuestion);
router.get("/getQuestions", questionController.getQuestions);
module.exports = router;
