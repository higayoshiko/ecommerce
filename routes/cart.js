const express = require("express");
const router = express.Router();
const https = require('node:https');


router.get("/", function(req, res) {
  res.render("cart");
});

module.exports = router;
