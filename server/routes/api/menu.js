var express = require('express');
var router = express.Router();
const Product = require("../../models/Product")
/* GET menu */
router.get('/', async function(req, res, next) {
  try {
    // Fetch all documents from the products collection
    const products = await Product.find();
    // Send the fetched products as a JSON response
    res.json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
