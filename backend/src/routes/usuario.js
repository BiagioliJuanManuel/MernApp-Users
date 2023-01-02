const {Router} = require('express');
const router = Router();

const {getUsrs, getUsr, createUsr, delUsr, updateUsr} = require('../controller/usrController')

//ruta index
router.route('/')
    .get(getUsrs)
    .post(createUsr)

//ruta por id usuarios
router.route('/:id')
    .get(getUsr)
    .delete(delUsr)
    .put(updateUsr)
    
module.exports = router;