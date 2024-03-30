// Importa Express
const express = require('express');
require('dotenv').config();
const app = express();
console.log(process.env.PORT)
// Configura el puerto en el que tu aplicación escuchará
const PORT = process.env.PORT || 3000;

// Middleware para manejar datos JSON
app.use(express.json());

// Ruta para manejar solicitudes GET
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Ruta para manejar solicitudes POST
app.post('/mensaje', (req, res) => {
    const mensaje = req.body.mensaje;
    res.send(`Mensaje recibido: ${mensaje}`);
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
