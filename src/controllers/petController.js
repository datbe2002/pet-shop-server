const petServices = require("../services/pet.service");

const petController = {
  getAllPets: async (req, res, next) => {
    try {
      const allPet = await petServices.getAllPets();
      console.log(allPet);
      return res.json(allPet);
    } catch (error) {
      next(error);
    }
  },

  //   createNewCategory: async (req, res, next) => {
  //     try {
  //       const newCate = await categoryServices.createNewCategory(req, res);
  //       return res.json({ message: "Create category successfully" });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  //   updateCategory: async (req, res, next) => {
  //     try {
  //       const updateCategory = await categoryServices.updateCategory(req, res);
  //       return res.json({ message: "Update category successfully" });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  //   deleteCategoryById: async (req, res, next) => {
  //     try {
  //       const deleteCategory = await categoryServices.deleteCateById(req, res);
  //       return res.json({ message: "Deleted category successfully" });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
};

module.exports = petController;
