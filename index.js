require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./dbConnect");
connectDB();

const authRoute = require("./src/routes/auth");
const userRoute = require("./src/routes/user");
const categoryRoute = require("./src/routes/category");
const { convertToApiError, handleError } = require("./src/middleware/apiError");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", categoryRoute);

app.use(convertToApiError);
app.use((err, req, res, next) => {
  handleError(err, res);
});
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of PetShop :D",
  })
);
//port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listen server from ${PORT}`));

module.exports = app;
