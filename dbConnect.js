require("dotenv").config();

const { Sequelize } = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.DATABASE_SCHEMA_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    logging: false,
  }
);

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

module.exports = connectDB;
