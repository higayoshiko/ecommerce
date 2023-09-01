const express = require("express");
const router = express.Router();
const https = require('node:https');

router.post("/", function(req, res) {
  let category = req.body.category;
  let searchInput = req.body.search_input;
  console.log(searchInput, category)
  try {
      if (searchInput === "" || searchInput === undefined) {
        res.redirect(`/search/${category}`);}
      else {
        res.redirect(`/search/${category}/filter/${searchInput}`);}
    }catch(err){
      console.log(err);
    }
});

router.get("/", function(req, res) {
const path = "https://fakestoreapi.com/products";

  https.get(path, (response) => {
      let result = "";
      response.on("data", function(data) {
      result += data;
          });

      response.on("end", function() {
        const parsed = JSON.parse(result);

        res.render("home", {
          products: parsed
      });
    });
  });
});

module.exports = router;
