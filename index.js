const express = require('express');
const app = express();

/* verbos http
GET: obtener
POST: crear
PUT: actualizar
DELETE: eliminar
PATCH: actualizar una parte
 
*/

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido ");

});

app.get("/:name", (req, res, next) => {
    console.log(req.params.name);
    res.status(200);
    res.send("Bienvenido " + req.params.name);

});


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo  en puerto 3000...');
}); 