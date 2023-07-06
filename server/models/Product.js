const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category: String,
  title: String,
  description: String,
  price: Number,
  image: String,
  altText: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
