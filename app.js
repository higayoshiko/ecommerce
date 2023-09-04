const express = require("express");
const app = express();
const path = require('node:path');
const ejs = require("ejs");
const bodyParser = require("body-parser");
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public"));

const addToCartRoute = require("./routes/addToCart");
app.use("/addToCart", addToCartRoute);
const checkOutRoute = require("./routes/checkOut");
app.use("/checkOut", checkOutRoute);
const searchRoute = require("./routes/search");
app.use("/search", searchRoute);
const homeRoute = require("./routes/home");
app.use("/", homeRoute);

app.listen(port, function() {
  console.log("server started");
});
