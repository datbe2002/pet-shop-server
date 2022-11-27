require("dotenv").config();

const bcrypt = require("bcryptjs");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const jwt = require("jsonwebtoken");
const usersRepository = require("../repository/usersRepository");

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
  // console.log(newUser);

  if (!newUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Register fail");
  }
  const { password, ...newUserRespont } = newUser;
  return newUserRespont;
};

const loginWithEmail = async (email, password) => {
  try {
    //check if email already exists
    // console.log(email);
    const user = await usersRepository.getUserByEmail(email);
    // console.log(user);
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Email or password is wrong");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Email or password is wrong pass"
      );
    }
    if (user && validPassword) {
      const { password, ...others } = user;
      return others;
    }
  } catch (error) {
    throw error;
  }
};

const genAuthToken = async (user) => {
  const { password, ...userWithoutPassword } = user;

  const accessToken = jwt.sign(
    userWithoutPassword,
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "30d",
    }
  );

  return accessToken;
};

module.exports = {
  createNewUser,
  loginWithEmail,
  genAuthToken,
};
