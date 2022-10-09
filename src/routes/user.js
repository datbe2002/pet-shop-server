const userController = require("../controllers/userController");

const router = require("express").Router();

router.get("/user", userController.getAllUsers);
router.delete("/user/:id", userController.deleteUserById);

module.exports = router;
