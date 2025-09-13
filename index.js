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
    res.send("Hola mundo desde express");

});

app.listen(3000, () => {
    console.log('Servidor corriendo  en puerto 3000...');
});