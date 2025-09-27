const bosyParser = require('body-parser');
const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');


app.use(bosyParser.json());
app.use(bosyParser.urlencoded({ extended: true }));


app.get("/", (req, res, next) => res.status(200).send("Bienvenido al pokedex"));

app.post("/pokemon", (req, res, next) => {
  return res.status(200).send(req.body.name);
});


app.get('/pokemon', (req, res, next) => {
  res.status(200).send(pokemon);
});



app.get('/pokemon/all', (req, res, next) => res.status(200).json(pokemon));



app.get('/pokemon/:id', (req, res, next) => {
  const raw = req.params.id;
  if (!/^\d{1,3}$/.test(raw)) return next();  // <--- clave

  const id = parseInt(raw, 10);
  if (id < 1 || id > 151) {
    return res.status(404).send("No se encontró el Pokémon");
  }
  return res.status(200).json(pokemon[id - 1]);
});


app.get('/pokemon/:name', (req, res, next) => {
  const name = req.params.name;
  const pkmn = pokemon.filter((p) => {
    return (p.name.toLowerCase() == name.toLowerCase()) && p;
  });

  if (pkmn.length > 0) {
    return res.status(200).send(pkmn);
  }

  return res.status(404).send("No se encontró el Pokémon");
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor corriendo en localhost:3000/pokemon...');
});