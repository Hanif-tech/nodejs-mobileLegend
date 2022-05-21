const express = require("express");
const server = express();
const port = 9001;
const bodyParser = require("body-parser");
const heroController = require("./controller/hero.controller");
const skillController = require("./controller/skill.controller");

server.use(bodyParser.urlencoded({ extended: false }));
server.set("view engine", "ejs");
server.set("views", "view");
server.use(express.static(__dirname));

server.use("/hero", heroController);
server.use("/skill", skillController);

server.use("/", function (request, response) {
  response.render("home");
  response.end();
});

server.listen(port, function () {
  console.log("running server on " + port);
});
