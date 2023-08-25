const express = require("express");
const router = express.Router();
const https = require('node:https');

// router.use((req, res, next) => {
//   console.log(req)
//
//   next();
// });

router.get("/:category", function(req, res) {
let category = req.params.category;
const path = `https://fakestoreapi.com/products/category/${category}`;
console.log(req.params.category)

  https.get(path, (response) => {
      let result = "";
      response.on("data", function(data) {
      result += data;
          });

      response.on("end", function() {
        const parsed = JSON.parse(result);

        res.render("search", {
          products: parsed
      });
    });
  });

  // return res.render("search", { category: category })
});


module.exports = router;
