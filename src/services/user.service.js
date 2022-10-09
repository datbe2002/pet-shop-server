const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const usersRepository = require("../repository/usersRepository");

const getAllUsers = async () => {
  const allUsers = await usersRepository.showAllUsers();
  if (allUsers.length == 0) {
    throw new ApiError("No users found");
  }
  return allUsers;
};

const deleteUserById = async (id) => {
  const getUserById = await usersRepository.getUserByID(id);
  if (!getUserById) {
    throw new ApiError(httpStatus[404], "User not found");
  }

  //   console.log(getUserById.id);
  await usersRepository.deleteUserById(id);
};

module.exports = {
  getAllUsers,
  deleteUserById,
};