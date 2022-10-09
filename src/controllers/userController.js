const db = require("../models");
const userServices = require("../services/user.service");

const userController = {
  //GET ALL USERS
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await userServices.getAllUsers();
      res.status(200).json({ users: allUsers });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params;
      await userServices.deleteUserById(id);
      res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

module.exports = userController;
