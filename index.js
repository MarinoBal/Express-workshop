const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

app.get("/", (req, res) => {
  res.status(200).send("Bienvenido al pokedex");
});

app.get('/pokemon/all', (req, res) => {
  res.status(200).send(pokemon);
});


app.get('/pokemon/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!/^\d{1,3}$/.test(req.params.id) || id < 1 || id > 151) {
    return res.status(404).send("No se encontró el Pokémon");
  }

  res.status(200).send(pokemon[id - 1]);
});

app.get('/pokemon/name/:name', (req, res) => {
  const name = req.params.name.toLowerCase();

  const found = pokemon.find(p => p.name.toLowerCase() === name);

  if (!found) {
    return res.status(404).send("No se encontró el Pokémon");
  }

  res.status(200).send(found);
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor corriendo en puerto 3000...');
});
