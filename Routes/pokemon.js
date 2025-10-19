const express = require("express");
const pokemon = express.Router();
const db = require('../config/database');

// INSERTAR POKÉMON
pokemon.post("/", async (req, res, next) => {
  const { pok_name, pok_height, pok_weight, pok_base_experience } = req.body;

  if (pok_name && pok_height && pok_weight && pok_base_experience) {
    let query = `
      INSERT INTO pokemon (pok_name, pok_height, pok_weight, pok_base_experience)
      VALUES ('${pok_name}', ${pok_height}, ${pok_weight}, ${pok_base_experience})
    `;

    const rows = await db.query(query);

    if (rows.affectedRows == 1) {
      return res.status(201).json({
        code: 201,
        message: "Pokémon insertado correctamente"
      });
    }

    return res.status(500).send("Error al insertar el Pokémon");
  }

  return res.status(500).json({
    code: 500,
    message: "Faltan datos obligatorios"
  });
});

// OBTENER TODOS LOS POKÉMON
pokemon.get("/", async (req, res, next) => {
  const pkmn = await db.query("SELECT * FROM pokemon");
  console.log(pkmn);
  res.status(200).json({ code: 1, message: pkmn });
});

// RUTA /ALL (POSIBLEMENTE TEMPORAL)
pokemon.get("/all", (req, res, next) => {
  res.status(200).json(pk);
});

// OBTENER POKÉMON POR ID
pokemon.get("/:id", (req, res, next) => {
  const raw = req.params.id;

  if (!/^\d{1,3}$/.test(raw)) return next();

  const id = parseInt(raw, 10);
  if (id < 1 && id > 722) {
    return res.status(404).json({
      code: 0,
      message: "No se encontró el Pokémon"
    });
  }

  return res.status(200).json({
    code: 1,
    message: pkmn
  });
});

// OBTENER POKÉMON POR NOMBRE
pokemon.get("/:name", (req, res, next) => {
  const name = req.params.name;
  const pkmn = pk.filter((p) => {
    return p.name.toLowerCase() == name.toLowerCase();
  });

  if (pkmn.length > 0) {
    return res.status(200).json({
      code: 1,
      message: pkmn
    });
  }

  return res.status(404).json({
    code: 0,
    message: "No se encontró el Pokémon"
  });
});

module.exports = pokemon;
