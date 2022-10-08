const bcrypt = require("bcryptjs");
const httpStatus = require("http-status");
const usersRepository = require("../repository/usersRepository");

const { ApiError } = require("../middleware/apiError");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  return hashedPass;
};

const createNewUser = async (req, res) => {
  const user = req.body;
  const userExisted = await usersRepository.getUserByEmail(user.email);
  if (userExisted) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  const hashPass = await hashPassword(user.password);
  const newUser = await usersRepository.createNewUser({
    email: user.email,
    fullName: user.fullName,
    password: hashPass,
    avatar: null,
  });
  console.log(newUser);

  if (!newUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Register fail");
  }
  const { password, ...newUserRespont } = newUser;
  return newUserRespont;
};

module.exports = {
  createNewUser,
};
