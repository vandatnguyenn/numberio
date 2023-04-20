const express = require("express");
const questionController = require("../controllers/questionController");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");
const router = express.Router();

router.post("/addQuestion", auth, authAdmin, questionController.addQuestion);
router.get("/getQuestions", questionController.getQuestions);
router.put("/updateQuestion/:id", auth, authAdmin, questionController.updateQuestion);
router.delete("/deleteQuestion/:id", auth, authAdmin, questionController.delQuestion);
module.exports = router;
