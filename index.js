const bosyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const  pokemon  = require("./Routes/Pokemon");

app.use(morgan('dev'));
app.use(bosyParser.json());
app.use(bosyParser.urlencoded({ extended: true }));


app.use("/pokemon", pokemon);


app.get("/", (req, res, next) => res.status(200).send("Bienvenido al pokedex"));

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor corriendo en localhost:3000/pokemon...');
});
