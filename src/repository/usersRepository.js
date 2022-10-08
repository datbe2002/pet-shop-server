const db = require("../models");

const Users = db.Users;

const findOne = async (where) => {
  return (await Users.findOne({ where: where }))?.dataValues;
};
const createNewUser = async (user) => {
  return (
    await Users.create({
      email: user.email,
      password: user.password,
      fullName: user.fullName,
    })
  )?.dataValues;
};

const getUserByEmail = async (email) => {
  return (
    await Users.findOne({
      where: {
        email: email,
      },
    })
  )?.dataValues;
};

module.exports = {
  findOne,
  getUserByEmail,
  createNewUser,
};
