const express = require("express");
const router = express.Router();
const https = require('node:https');
const cartItems = require("../models/CartItems");


// router.post("/", function(req, res) {
//
// const cartItem = new CartItems({
//   title: req.body.itemName,
//   price: req.body.itemPrice,
//   image: req.body.itemImage
//   });
//
// });

router.get("/:category", function(req, res) {
  let category = req.params.category;
  let path = `https://fakestoreapi.com/products/category/${category}`;

  if(category === "all") {path = "https://fakestoreapi.com/products"}

  https.get(path, (response) => {
      let result = "";
      response.on("data", function(data) {
      result += data;
          });

      response.on("end", async function() {
        const parsed = await JSON.parse(result);

        res.render("search", {
          products: parsed,
          category: category
      });
    });
  });
});


router.get("/:category/filter/:searchInput", function(req, res) {
  let category = req.params.category;
  let searchInput = req.params.searchInput;
  let path = `https://fakestoreapi.com/products/category/${category}`;

  if(category === "all") {path = "https://fakestoreapi.com/products"};


  https.get(path, (response) => {
      let result = "";
      response.on("data", function(data) {
      result += data;
          });

      response.on("end", function() {
        const parsed = JSON.parse(result).filter(item =>
          item.title
          .toLowerCase()
          .replace(/[^a-zA-Z0-9 ]/g, "")
          .includes(searchInput
          .toLowerCase()
          .replace(/[^a-zA-Z0-9 ]/g, "")));

        res.render("search", {
          products: parsed,
          category: category,
          searchInput: searchInput
      });
    });
  });
});

module.exports = router;
