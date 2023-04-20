const router = require("express").Router();
const gameController = require("../controllers/gameController");
const authAdmin = require("../middlewares/authAdmin");
const auth = require("../middlewares/auth");

router.post("/add", auth, authAdmin, gameController.postGame);
router.get("/infor/:id", gameController.getGame);
module.exports = router;
