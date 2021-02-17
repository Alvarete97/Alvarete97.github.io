

// iniciando
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

console.log('Serever conectado');

app.use(cors());
app.use(express.json());

// Parametros de conexion
const USER = "Usuario1";
const PASSWORD = "8V3WGYylXzVLVHjO";
const DATA_BASE = "dbTFG";

// Preparando cadena de conexion
const CONECTOR = `mongodb+srv://${USER}:${PASSWORD}@dbtfg.d4wbo.mongodb.net/${DATA_BASE}?retryWrites=true&w=majority`;
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Abriendo la conexión a mongoDB Atlas
connect(CONECTOR, OPTIONS, MongoError => {
    // si algo sale mal mostramos el error y paramos el servidor
    if (MongoError) {
        console.error(MongoError);
        process.exit(1);
    }
    // se inicia el servidor
    Server.listen(port, error => {
        // En caso de error indicamos el problemas
        if (error) {
            console.error(error);
            process.exit(1);
        }
        console.log("Conexión establecida con MongoDB Altas");
        console.log("Servidor listo");
    });
}
);

