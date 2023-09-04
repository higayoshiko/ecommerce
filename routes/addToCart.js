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

res.render("home");
});


module.exports = router;
