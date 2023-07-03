const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Need to include what category of menu item this is
// For instance, category: "appOrSalad"
// Then find() can be used on the category for each section
const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  altText: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
