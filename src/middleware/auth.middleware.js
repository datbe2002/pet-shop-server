require("dotenv").config();

const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const { ApiError } = require("./apiError");

const auth = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        throw new ApiError(httpStatus[403], "Token is not valid");
      }
      req.payload = payload;
      next();
    });
  } else {
    throw new ApiError(httpStatus[401], "You're not authenticated");
  }
};
module.exports = auth;
