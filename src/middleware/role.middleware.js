require("dotenv").config();
const jwt = require("jsonwebtoken");

const role = (roles) => async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const currentUser = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, payload) => {
        if (!roles.includes(payload?.role) || err) {
          res.status(403).send({ error: "Error" });
        }
        return payload;
      }
    );
    req.currentUser = currentUser;
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid credentials" });
  }
};
module.exports = role;
