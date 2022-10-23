const { handleError } = require("../middleware/apiError");
const db = require("../models");
const userServices = require("../services/user.service");

const userController = {
  //GET ALL USERS
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await userServices.getAllUsers();
      return res.status(200).json({ users: allUsers });
    } catch (error) {
      handleError(error, res);
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params;
      await userServices.deleteUserById(id);
      return res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
      handleError(error, res);
    }
  },
};

module.exports = userController;
