const db = require("../models");
const userServices = require("../services/user.service");

const userController = {
  //GET ALL USERS
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await userServices.getAllUsers();
      return res.status(200).json({ users: allUsers });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params;
      await userServices.deleteUserById(id);
      return res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};

module.exports = userController;
