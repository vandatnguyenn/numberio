const router = require("express").Router();
const accountController = require("../controllers/accountController");
const auth = require("../middlewares/auth");
router.post("/register", accountController.register);
router.get("/refesh_token", accountController.refeshToken);
router.post("/login", accountController.login);
router.get("/logout", accountController.logout);
router.get("/infor", auth, accountController.getUser);
module.exports = router;
