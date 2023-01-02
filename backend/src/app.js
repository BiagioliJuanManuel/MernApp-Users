const express = require('express')
const cors = require('cors')

const app = express(); // asginando express a una constante

//configuracion del servidor backend

app.set('port', process.env.PORT || 4000); //estableciendo puertos en variable de entorno o un puerto fijo

//middlewares

app.use(cors())
app.use(express.json())

//rutas

app.get('/', (req, res)=>{
    res.send('Bienvenido a la API restful')
})

//ruta para Api de Usuarios
app.use('/api/usuarios', require('./routes/usuario'));

module.exports = app;