var express = require("express");
var router = express.Router();
const Product = require("../../models/Product");
/* GET menu */
router.get("/", async function (req, res, next) {
  try {
    // Fetch all documents from the products collection and group them by category
    const menuData = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          items: {
            $push: {
              title: "$title",
              description: "$description",
              price: "$price",
              image: "$image",
              altText: "$altText",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          items: 1,
        },
      },
    ]);

    // Transform the data into the desired format
    const menuDataByCategory = menuData.reduce((acc, curr) => {
      acc[curr.category] = curr.items;
      return acc;
    }, {});

    // Send the transformed data as a JSON response
    res.json(menuDataByCategory);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
