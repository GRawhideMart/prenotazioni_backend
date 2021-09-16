let Item = require("../models/inventary.model");

exports.getItems = (req, res) => {
  // Find all users
  const items = Item.findAll()
    .then((items) => res.json(items))
    .catch((err) => console.error(err));
};
