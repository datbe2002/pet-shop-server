const authServices = require("../services/auth.service");

const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const newUserResponse = await authServices.createNewUser(req, res);
      res.status(200).send({
        // msg: "Register successfully",
        newUserResponse,
      });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  },

  //LOGIN
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await authServices.loginWithEmail(email, password);
      res.status(200).send({ user });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  },
};

module.exports = authController;
