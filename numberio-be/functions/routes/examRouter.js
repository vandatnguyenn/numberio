const router = require("express").Router();
const examController = require("../controllers/examController");

router.post("/post", examController.postExam);
router.get("/get", examController.getExam);

module.exports = router;
