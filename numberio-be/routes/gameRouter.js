const router = require('express').Router();
const gameController = require('../controllers/gameController');
// const authAdmin = require("../middlewares/authAdmin");
// const auth = require("../middlewares/auth");

router.post('/', gameController.postGame);
router.get('/all', gameController.getAll);
router.get('/:id', gameController.getGameById);
router.put('/:id', gameController.updateGame);

module.exports = router;
