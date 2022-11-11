const userServices = require("../services/user.service");

const userController = {
  //GET ALL USERS
  getAllUsers: async (req, res, next) => {
    try {
      const allUsers = await userServices.getAllUsers();
      console.log(allUsers);
      return res.status(200).json({ users: allUsers });
    } catch (error) {
      next(error);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const user = await userServices.updateUser(req, res);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  },

  deleteUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      await userServices.deleteUserById(id);
      return res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
