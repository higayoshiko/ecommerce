const mongoose = require("mongoose");

const cartItemsSchema = {
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}

module.exports = mongoose.model("CartItems", cartItemsSchema);
