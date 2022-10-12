require("dotenv").config();

const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        res.status(403).json({ error: "Token is not valid" });
      }
      req.payload = payload;
      next();
    });
  } else {
    res.status(401).json({ error: "You're not authenticated" });
  }
};
module.exports = auth;
