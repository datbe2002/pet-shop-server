const authServices = require("../services/auth.service");

const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const newUserResponse = await authServices.createNewUser(req, res);
      return res.send({
        // msg: "Register successfully",
        newUserResponse,
      });
    } catch (error) {
      return res.send({ error: error });
    }
  },

  //LOGIN
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await authServices.loginWithEmail(email, password);
      const accessToken = await authServices.genAuthToken(user);
      res.cookie("xxx-access-token", accessToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      return res.status(200).send({ user, accessToken });
    } catch (error) {
      return res.send({ error: error });
    }
  },
  ///

  logoutUser: async (req, res) => {
    res.clearCookie("xxx-access-token");
    return res.json({ msg: "Logged out" });
  },
};

module.exports = authController;
