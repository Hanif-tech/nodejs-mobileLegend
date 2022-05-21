const { json } = require("express/lib/response");
const db = require("../config");

exports.getHero = (response) => {
  const sql = "SELECT * FROM hero ";

  db.query(sql, (err, result) => {
    if (err) return console.log("error" + error);

    const heroes = {
      title: "MOBILE LEGEND HERO LIST",
      data: JSON.parse(JSON.stringify(result)),
    };

    response.render("index", { heroes });
    response.end();
    console.log(result);
  });
};

exports.getHeroById = (request, response) => {
  const sql = `SELECT * FROM hero where hero.id = ${request}`;

  db.query(sql, (err, result) => {
    if (err) return console.log("error" + err);

    const hero = {
      title: "Data hero By ID",
      data: JSON.parse(JSON.stringify(result)),
    };

    response.render("heroDetail", { hero });
    response.end();
  });
};

exports.updateHeroById = (data, response) => {
  const id = data.id;
  const name = data.name;
  const role = data.role;

  const sql = `UPDATE hero SET name = '${name}', role = '${role}' WHERE id = ${id};`;

  db.query(sql, (err, result) => {
    if (err) return console.log("error" + err);

    response.redirect("/hero");
    response.end();
  });
};
exports.addHeroById = (data, response) => {
  const name = data.name;
  const role = data.role;

  const sql = `INSERT INTO hero (id, name, role) VALUES (NULL, '${name}', '${role}');`;

  db.query(sql, (err, result) => {
    if (err) return console.log("error" + err);

    response.redirect("/hero/");
    response.end();
  });
};
exports.deleteHeroById = (data, response) => {
  const id = data.id;

  const sql = `DELETE FROM hero WHERE id = ${id}`;

  db.query(sql, (err, result) => {
    if (err) return console.log("error" + err);

    response.redirect("/hero");
    response.end();
  });
};
