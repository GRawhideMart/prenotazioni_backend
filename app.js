const express = require("express");

// Database
const { db, testDB } = require("./database/dbConfig");

// Instantiate application
const app = express();

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
