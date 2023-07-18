const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors')

//Crear el servidor de express

const app = express();
//DB
dbConnection();

//Configuración del CORS
app.use(cors());
//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );


//Directorio público
app.use(express.static('public'));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(` servidor corriendo en puerto ${process.env.PORT}`)
});