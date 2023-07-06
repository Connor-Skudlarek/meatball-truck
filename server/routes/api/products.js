var express = require("express");
var router = express.Router();
const Product = require("../../models/Product");

/* POST new product */
router.post("/", async function (req, res, next) {
  try {
    // Create a new product using the data from the request body
    const newProduct = new Product(req.body);
    // Save the new product to the database
    await newProduct.save();
    // Send a success response
    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
