const express = require("express");
const pokemon = express.Router();
const db = require('../config/database');
    

pokemon.post("/", (req, res, next) => {
  return res.status(200).send(req.body.name);
});


pokemon.get("/", async (req, res, next) => {
   const pkmn = await db.query("SELECT * FROM pokemon");
   console.log(pkmn);
  res.status(200).json(pkmn);
});



pokemon.get('/all', (req, res, next) => res.status(200).json(pk));


pokemon.get('/:id', (req, res, next) => {
  const raw = req.params.id;
  if (!/^\d{1,3}$/.test(raw)) return next();  // <--- clave

  const id = parseInt(raw, 10);
  if (id < 1 || id > 151) {
    return res.status(404).send("No se encontró el Pokémon");
  }
  return res.status(200).json(pk[id - 1]);
}); 


pokemon.get('/:name', (req, res, next) => {
  const name = req.params.name;
  const pkmn = pk.filter((p) => {
    return (p.name.toLowerCase() == name.toLowerCase()) && p;
  });

  if (pkmn.length > 0) {
    return res.status(200).send(pkmn);
  }

  return res.status(404).send("No se encontró el Pokémon");
});

module.exports = pokemon;
