const userServices = require("../services/auth.service");

const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const newUserResponse = await userServices.createNewUser(req, res);
      res.status(200).send({
        newUserResponse,
      });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  },
};

module.exports = authController;
