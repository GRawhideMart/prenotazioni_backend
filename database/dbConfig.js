// Database
require("dotenv").config();
const { Sequelize } = require("sequelize");
const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const testDB = async () => {
  try {
    await db.authenticate();
    console.log("Connection estabilished successfully");
  } catch (err) {
    console.error("Couldn't connect to database:", err.message);
  }
};

module.exports = { db, testDB };
