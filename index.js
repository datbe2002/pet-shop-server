require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./dbConnect");
connectDB();

const authRoute = require("./src/routes/auth");
const userRoute = require("./src/routes/user");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api", authRoute);
app.use("/api", userRoute);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the beginning of PetShop :D",
  })
);
//port
const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listen server from ${port}`));

module.exports = app;
