const express = require("express");

// Database
const db = require("./database/dbConfig");

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
app.listen(PORT, async () => {
  try {
    await db.authenticate();
    console.log("Connection estabilished successfully");
    console.log(`Server listening on port ${PORT}`);
  } catch (err) {
    console.error("Couldn't connect to database:", err.message);
  }
});
