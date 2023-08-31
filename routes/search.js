const express = require("express");
const router = express.Router();
const https = require('node:https');

router.post("/", function(req, res) {
  let category = req.body.category;
  try {
    res.redirect(`/search/${category}`);
  }catch(err){
    console.log(err);
  }
  // console.log(category)
});

router.get("/:category", function(req, res) {
  let category = req.params.category;
  let path = `https://fakestoreapi.com/products/category/${category}`;

  if(category === "all") {path = "https://fakestoreapi.com/products"}

  console.log(path);

  https.get(path, (response) => {
      let result = "";
      response.on("data", function(data) {
      result += data;
          });

      response.on("end", function() {
        const parsed = JSON.parse(result);

        res.render("search", {
          products: parsed,
          category: category
      });
    });
  });
});


module.exports = router;
