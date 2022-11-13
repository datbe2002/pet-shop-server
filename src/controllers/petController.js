const petServices = require("../services/pet.service");
const petRepository = require("../repository/petRepository");
const petController = {
  getAllPets: async (req, res, next) => {
    const { page } = req.query; // so page do nguoi dung nhap
    const { limit } = req.query; // limit data moi trang

    // console.log(page);
    // console.log(limit);

    if (page) {
      //get page
      let skip = (page - 1) * limit;
      const getPetByPage = await petRepository.getPetWithPage(limit, skip);
      return res.json(getPetByPage);
    } else {
      //get all
      try {
        let params = [];
        // params.keyword = req.query.keyword

        const allPet = await petServices.getAllPets(params, { pet: "all" });
        // console.log(allPet);
        return res.json(allPet);
      } catch (error) {
        next(error);
      }
    }
  },

  getPetById: async (req, res, next) => {
    try {
      const pet = await petServices.getAllPets(
        { id: req.params.id },
        { pet: "one" }
      );
      // console.log(pet);
      return res.json(pet);
    } catch (error) {
      next(error);
    }
  },

  createNewpet: async (req, res, next) => {
    try {
      const newPet = await petServices.createNewPet(req, res);
      return res.json({ message: "Create pet successfully" });
    } catch (error) {
      next(error);
    }
  },

  updatePet: async (req, res, next) => {
    try {
      const updatepet = await petServices.updatepet(req, res);
      return res.json({ message: "Update pet successfully" });
    } catch (error) {
      next(error);
    }
  },

  deletePetById: async (req, res, next) => {
    try {
      const delePet = await petServices.deletePetById(req, res);
      return res.json({ message: "Deleted pet successfully" });
    } catch (error) {
      next(error);
    }
  },
  searchByName: async (req, res, next) => {
    try {
      const searhName = await petServices.searchByName(req, res);
      return res.json(searhName);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = petController;
