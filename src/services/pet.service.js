const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const petRepository = require("../repository/petRepository");

const getAllPets = async () => {
  const allPets = await petRepository.showAllPetsWithCate();
  if (allPets.length == 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "No pet found");
  }
  return allPets;
};

const getPetId = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No id found");
  }

  const getPet = await petRepository.getPetById(id);
  return getPet;
};

module.exports = {
  getAllPets,
  getPetId,
};
