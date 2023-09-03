const express = require("express");
const router = express.Router();
const https = require('node:https');
const cartItems = require("../models/CartItems");


router.post("/", function(req, res) {

// const cartItem = new CartItems({
//   title: req.body.itemName,
//   price: req.body.itemPrice,
//   image: req.body.itemImage
//   });

// cartItem.save(err => {
//   if(err) {console.log(err)}
//   });
console.log(req.body.itemName)
});

router.post("/", function(req, res) {
  let category = req.body.category;
  let searchInput = req.body.search_input;

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

      response.on("end", async function() {
        const parsed = await JSON.parse(result);

        res.render("home", {
          products: parsed
      });
    });
  });
});

module.exports = router;
