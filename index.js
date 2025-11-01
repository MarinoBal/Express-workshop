
const express = require('express');
const morgan = require('morgan');
const app = express();
const  pokemon  = require('./Routes/Pokemon');
const user = require('./Routes/User');

app.use(morgan('dev'));
app.use(express.json());
app.use (express.urlencoded({ extended: true })); 

app.get("/", (req, res, next) => res.status(200).json({ code: 1, message: "Bienvenido a la API de Pokémon" }));

app.use("/pokemon", pokemon);
app.use("/user", user)

app.use((req, res, next) => {
  return res.status(404).json({ code: 404, message: "No se encontró la ruta" });
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor corriendo en localhost:3000/pokemon...');
});
