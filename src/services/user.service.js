const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const usersRepository = require("../repository/usersRepository");

const getAllUsers = async () => {
  const allUsers = await usersRepository.showAllUsers();
  if (allUsers.length == 0) {
    throw new ApiError(httpStatus[404], "No users found");
  }
  return allUsers;
};

const updateUser = async (req, res) => {
  try {
    const data = req.body;
    if (!data.id) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Missing id");
    }
    const user = await usersRepository.getUserByID(data.id);

    if (user) {
      await usersRepository.update(data, { id: data.id });
      return res.json("Updated user successfully");
    }
  } catch (error) {
    throw error;
  }
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
  updateUser,
};
