const categoryController = require("../controllers/categoryController");

const role = require("../middleware/role.middleware");
const router = require("express").Router();

router.get("/category", categoryController.getAllCategories);
router.patch("/category/update", categoryController.updateCategory);
router.post("/category", role("Admin"), categoryController.createNewCategory);
router.delete(
  "/category/:id",
  role("Admin"),
  categoryController.deleteCategoryById
);

module.exports = router;
