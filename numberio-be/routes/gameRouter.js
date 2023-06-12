const router = require('express').Router();
const gameController = require('../controllers/gameController');
// const authAdmin = require("../middlewares/authAdmin");
// const auth = require("../middlewares/auth");
const keycloak = require('../middlewares/authentication/keycloak');

router.post('/', keycloak.extractUser, gameController.postGame);
router.get('/all', keycloak.extractUser, gameController.getAll);
router.get('/:id', keycloak.extractUser, gameController.getGameById);
router.put('/:id', keycloak.extractUser, gameController.updateGame);

module.exports = router;
