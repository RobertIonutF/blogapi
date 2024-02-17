const router = require("express").Router();
const user_controller = require("../controllers/user-controller");

router.post("/sign-up", user_controller.signUp);
router.post("/sign-in", user_controller.signIn);

module.exports = router;