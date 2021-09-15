const express = require("express");
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Instantiate application
const app = express();

// Database
const sequelize = new Sequelize(
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
    await sequelize.authenticate();
    console.log("Connection estabilished successfully");
  } catch (err) {
    console.error("Couldn't connect to database:", err.message);
  }
};

// Middleware
app.use(express.json());

// Routing
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// Run server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  testDB();
  console.log(`Server listening on port ${PORT}`);
});
