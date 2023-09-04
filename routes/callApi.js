const express = require("express");
const router = express.Router();
const https = require('node:https');


const getItems = function() {
  https.get("https://fakestoreapi.com/products", (response) => {
      let result = "";
      response.on("data", function(data) {
      result += data;
          });

      response.on("end", async function() {
        const parsed = await JSON.parse(result);

        res.render("home", {
          products: parsed
      });
    });
  });
}

module.exports = router;
module.exports = getItems;
