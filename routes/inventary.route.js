const { Router } = require("express");
let Item = require("../controllers/inventary.controller");

const router = Router();

router.route("/").get(Item.getItems);
router.route("/").post(Item.insertItem);

module.exports = router;
