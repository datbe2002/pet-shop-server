const db = require("../models/index");

const Users = db.Users;

const findOne = async (where) => {
  return await Users.findOne({ where: where });
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
  console.log(email);
  return (
    await Users.findOne({
      where: {
        email: email,
      },
    })
  )?.dataValues;
};

const showAllUsers = async () => {
  let userList = [];
  userList = await Users.findAll({ raw: true });
  return userList;
};

const getUserByID = async (id) => {
  return (
    await Users.findOne({
      where: {
        id: id,
      },
    })
  )?.dataValues;
};

const deleteUserById = async (id) => {
  return (await Users.destroy({ where: { id: id } }))?.dataValues;
};

module.exports = {
  findOne,
  getUserByEmail,
  createNewUser,
  showAllUsers,
  getUserByID,
  deleteUserById,
};
