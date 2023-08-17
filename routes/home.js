const express = require("express");
const router = express.Router();
const https = require('node:https');


router.get("/", function(req, res) {

const path = "https://fakestoreapi.com/products";

  https.get(path, (response) => {
      let result = "";
      response.on("data", function(data) {
      result += data;
          });

      response.on("end", function() {
        const parsed = JSON.parse(result);
        console.log(parsed)

        res.render("home", {
          products: parsed
      });
    });
  });
});

module.exports = router;
