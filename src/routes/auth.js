const authController = require("../controllers/authController");
const auth = require("../middleware/auth.middleware");

const router = require("express").Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", auth, authController.logoutUser);
module.exports = router;
