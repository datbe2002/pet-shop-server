require("dotenv").config();
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const { ApiError } = require("./apiError");

const role = (roles) => async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const currentUser = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, payload) => {
        if (!roles.includes(payload?.role) || err) {
          throw new ApiError(httpStatus.UNAUTHORIZED, "Error credentials");
        }
        return payload;
      }
    );
    req.currentUser = currentUser;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = role;
