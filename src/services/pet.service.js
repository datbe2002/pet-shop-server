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

module.exports = {
  getAllPets,
};
