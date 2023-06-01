const router = require('express').Router();
const examController = require('../controllers/examController');

router.post('/', examController.postExam);
router.get('/all', examController.getAllExam);
router.get('/:id', examController.getExam);
router.put('/:id', examController.updateExam);

module.exports = router;
