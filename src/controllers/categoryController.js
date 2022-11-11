const categoryServices = require("../services/category.service");

const categoryController = {
  getAllCategories: async (req, res, next) => {
    try {
      const allCate = await categoryServices.getAllCategories();
      console.log(allCate);
      return res.json(allCate);
    } catch (error) {
      next(error);
    }
  },

  createNewCategory: async (req, res, next) => {
    try {
      const newCate = await categoryServices.createNewCategory(req, res);
      return res.json({ message: "Create category successfully" });
    } catch (error) {
      next(error);
    }
  },

  updateCategory: async (req, res, next) => {
    try {
      const updateCategory = await categoryServices.updateCategory(req, res);
      return res.json({ message: "Update category successfully" });
    } catch (error) {
      next(error);
    }
  },

  deleteCategoryById: async (req, res, next) => {
    try {
      const deleteCategory = await categoryServices.deleteCateById(req, res);
      return res.json({ message: "Deleted category successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = categoryController;
