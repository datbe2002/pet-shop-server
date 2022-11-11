const userController = require("../controllers/userController");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const router = require("express").Router();

router.get("/user", role("Admin"), userController.getAllUsers);
router.patch("/user/update", userController.updateUser);

router.delete("/user/:id", role("Admin"), userController.deleteUserById);

module.exports = router;
