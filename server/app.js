var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var menuRouter = require("./routes/api/menu");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.use("/api/menu", menuRouter);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname,"..", "client", "build", "index.html"));
});
app.use("/", indexRouter);

app.listen(80, () => console.log("Listening on port 80"));

module.exports = app;
