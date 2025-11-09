//dependencias
const express = require('express');
const morgan = require('morgan');
const app = express();
//rutas
const  pokemon  = require('./Routes/Pokemon');
const user = require('./Routes/User');
//middleware
const auth = require ('./middleware/auth');
const notFound = require ('./middleware/notFound');
const index = require ('./middleware/index');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use (express.urlencoded({ extended: true })); 

app.get("/", index);

app.use("/user", user)

app.use(auth);

app.use("/pokemon", pokemon);

app.use(notFound);


app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor corriendo en localhost:3000/pokemon...');
});
