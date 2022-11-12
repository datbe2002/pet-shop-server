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

  getPetById: async (req, res, next) => {
    try {
      const pet = await petServices.getPetId(req, res);
      console.log(pet);
      return res.json(pet);
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

  deletePetById: async (req, res, next) => {
    try {
      const delePet = await petServices.deletePetById(req, res);
      return res.json({ message: "Deleted pet successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = petController;
