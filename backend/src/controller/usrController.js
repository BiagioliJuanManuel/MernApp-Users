const usrControl = {}

const Usuario = require('../models/usrModel')

usrControl.getUsrs = async(req, res) =>{
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usrControl.createUsr = async(req, res) =>{
    const {nombre, apellido, edad, dni, telefono, correo} = req.body;
    const newUsr = new Usuario({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        dni: dni,
        telefono: telefono,
        correo: correo
    })
    await newUsr.save();
    res.json({messsage: 'el usuario ha sido creado exitosamente'})
}

usrControl.getUsr = async(req, res) =>{
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
}

usrControl.delUsr = async(req, res) =>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({messsage: 'usuario eliminado'})
}

usrControl.updateUsr = async(req, res) =>{
    const {nombre, apellido, edad, dni, telefono, correo} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        dni,
        telefono,
        correo
    })
    res.json({messsage: 'usuario actualizado'})
}

module.exports = usrControl;