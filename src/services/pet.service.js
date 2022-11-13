const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const petRepository = require("../repository/petRepository");

const getAllPets = async (params, option) => {
  // console.log(option);

  try {
    if (option.pet === "all") {
      const allPets = await petRepository.showAllPetsWithCate();
      if (allPets.length == 0) {
        throw new ApiError(httpStatus.NOT_FOUND, "No pet found");
      }
      return allPets;
    }
    if (option.pet === "one") {
      const getPet = await petRepository.getPetById(params.id);
      return getPet;
    }
  } catch (error) {
    throw error;
  }
};

const deletePetById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No id found");
  }
  const existedPet = await petRepository.getPetById(id);

  if (!existedPet) {
    throw new ApiError(httpStatus.NOT_FOUND, "Can not find that category");
  } else {
    await petRepository.deletePet(id);
  }
};

const createNewPet = async (req, res) => {
  console.log(req.body);
  const data = req.body;

  // res.send("HOll");
  const creatPets = await petRepository.createPet(data);
  return creatPets;
};

module.exports = {
  getAllPets,
  deletePetById,
  createNewPet,
};
