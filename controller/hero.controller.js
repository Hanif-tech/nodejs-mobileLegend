const express = require("express");
const router = express.Router();
const Hero = require("../model/Hero.model");

router.get("/", (request, response) => {
  Hero.getHero(response);
});
router.get("/:id", (request, response) => {
  const id = request.params.id;
  Hero.getHeroById(id, response);
});
router.post("/update", (request, response) => {
  const data = {
    id: request.body.id,
    name: request.body.name,
    role: request.body.role,
  };
  Hero.updateHeroById(data, response);
});
router.post("/add", (request, response) => {
  const data = {
    name: request.body.name,
    role: request.body.role,
  };

  Hero.addHeroById(data, response);
});
router.post("/delete", (request, response) => {
  const data = {
    id: request.body.id,
  };

  Hero.deleteHeroById(data, response);
});

module.exports = router;
