const express = require('express');
const app = express();
const {pokemon} = require('./pokedex.json');

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido al pokedex");

});

app.get("/pokemon", (req, res, next) => {
    res.status(200);
    res.send(pokemon);

});

app.get("/pokemon/:id", (req, res, next) => {
    res.status(200);
    res.send (pokemon[req.params.id - 1]);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo  en puerto 3000...');
}); 