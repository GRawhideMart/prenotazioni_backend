let Item = require("../models/inventary.model");

// SELECT * FROM inventario
exports.getItems = (req, res) => {
  // Find all users
  const items = Item.findAll()
    .then((items) => res.json(items))
    .catch((err) => console.error(err));
};

// INSERT INTO inventario(...) VALUES(...)
exports.insertItem = (req, res) => {
  // Questo metodo si aspetta req.body COME ARRAY!!
  const item = req.body.map((item) => {
    Item.create(item)
      .then((item) => res.json(item))
      .catch((err) => console.error(err));
  });
};
