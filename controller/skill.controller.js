const express = require("express");
const router = express.Router();
const Skill = require("../model/Skill.model");

router.get("/:id", (request, response) => {
  const id = request.params.id;
  Skill.getHeroById(id, response);
});
router.post("/add", (request, response) => {
  console.log(request.body.heroId + "halo");
  const data = {
    skill: request.body.skill,
    heroId: request.body.heroId,
  };
  console.log(data.heroId);
  Skill.addHeroById(data, response);
});

module.exports = router;
