const authServices = require("../services/auth.service");

const authController = {
  //REGISTER
  registerUser: async (req, res, next) => {
    try {
      const newUserResponse = await authServices.createNewUser(req, res);
      return res.json({
        // msg: "Register successfully",
        newUserResponse,
      });
    } catch (error) {
      next(error);
    }
  },

  //LOGIN
  loginUser: async (req, res, next) => {
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
      return res.json({ user, accessToken });
    } catch (error) {
      next(error);
    }
  },
  ///

  logoutUser: async (req, res) => {
    res.clearCookie("xxx-access-token");
    return res.json({ msg: "Logged out" });
  },
};

module.exports = authController;
