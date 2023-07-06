require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const menuRouter = require("./routes/api/menu");
const productsRouter = require("./routes/api/products");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB Atlas");
});

app.use("/api/menu", menuRouter);
app.use("/api/products", productsRouter);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
app.use("/", indexRouter);

app.listen(80, () => console.log("Listening on port 80"));

module.exports = app;
