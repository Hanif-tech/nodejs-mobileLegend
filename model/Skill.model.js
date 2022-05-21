const db = require("../config");

exports.getHeroById = (request, response) => {
  const count = `select count(skills.hero_id) as count from skills INNER JOIN hero ON skills.hero_id=hero.id where hero.id LIKE  '${request}'`;

  const sql = `SELECT hero_id,hero.name,skills.skill_name,skills.description FROM hero INNER JOIN skills ON hero.id=skills.hero_id WHERE hero.id LIKE  '${request}'`;

  db.query(count, (err, result) => {
    if (err) return console.log("error" + err);
    if (result[0].count < 1) {
      db.query(`select id from hero where id LIKE '${request}'`, (err, res) => {
        if (err) throw err;
        const skill = {
          heroId: res[0].id,
          data: false,
        };
        response.render("skill", { skill });
        response.end();
        console.log(skill.heroId);
      });
    } else {
      db.query(sql, (err, res) => {
        if (err) throw err;
        console.log(res);
        const skill = {
          title: "Skill hero By ID",
          data: res,
        };
        response.render("skill", { skill });
        response.end();
      });
    }
  });
};

exports.addHeroById = (data, response) => {
  const skill = data.skill;
  const heroId = data.heroId;

  const sql = `INSERT INTO skills (id, hero_id,skill_name, description) VALUES (NULL,'${heroId}' ,'${skill}', NULL);`;

  db.query(sql, (err, result) => {
    if (err) return console.log("error" + err);

    response.redirect(`/skill/${heroId}`);
    response.end();
  });
};
