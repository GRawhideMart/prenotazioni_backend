const express = require("express");
const cors = require("cors");

// Database
const db = require("./database/db.config");
const Inventary = require("./models/Inventary");
(async () => {
  await db.sync();
  console.log("Database synched correctly");
})();

// Instantiate application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Routing
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.post("/inventario", (req, res) => {
  const item = Inventary.create(req.body)
    .then((item) => {
      console.log("Entry created");
      res.json(item);
    })
    .catch((err) => console.error(err.message));
});

// Run server
const PORT = process.env.PORT || 8081;
db.authenticate() // Try to connect to database
  .then(() => {
    // Upon successful promise completion
    console.log("Connection estabilished successfully");
    app.listen(PORT, () => {
      // Start server
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    // Upon unfulfilled promise, DO NOT start server
    console.error("Couldn't connect to database:", err.message);
  });
