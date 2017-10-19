const express = require("express");
const app = express();
const path = require("path");
const http = require("http");

app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));

const server = http.createServer(app);
server.listen(3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("main", {});
});
