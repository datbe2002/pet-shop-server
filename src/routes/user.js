const userController = require("../controllers/userController");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const router = require("express").Router();

router.get("/user", role("Admin"), userController.getAllUsers);
router.delete("/user/:id", userController.deleteUserById);

module.exports = router;
