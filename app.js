const express = require('express');
require('./src/db');

const UniversidadRoutes = require('./src/routes/universidadRoutes')

const app = express();

app.use(express.json());

async function aplicacion() {
    await app.listen(4322);
    console.log("Mi puerto es el 4322");
}

app.get('/', (req, res) => {
    res.send("Conectado en la Web Universidad");
})

app.use('/universidad', UniversidadRoutes);

aplicacion();