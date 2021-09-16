const { Router } = require("express");
let Item = require("../controllers/inventary.controller");

const router = Router();

router.route("/").get(Item.getItems);

module.exports = router;
