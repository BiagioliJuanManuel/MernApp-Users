const {Schema, model} = require('mongoose')

const usrSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    dni: Number,
    telefono: Number,
    correo: String
},
{
    timestamps: true,
}
// deshabilitando el versioning key de mongoose
//,
// {
//     versionKey: false
// }
)

module.exports = model('dbusuario', usrSchema)