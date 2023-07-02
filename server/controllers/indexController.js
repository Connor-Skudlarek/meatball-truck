function indexController(req, res, next) {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
}
