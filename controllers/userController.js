const express = require("express");
const router = express.Router();
const exer = require("../models/user_data");

router.get("/", function (req, res) {
  res.render("index", exer);
});

module.exports = router;
