const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator')

const {  getUsuario, postUsuario, /*putUsuario, patchUsuario,*/ deleteUsuario } = require('../controller/usuario')
const { validarCampos } = require('../middelewares/validar-campos')

router.get('/',getUsuario)
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de más de 5 caracteres ').isLength({min:5}),
    check('rol', 'No es un rol válido ').isIn(['Admin', 'Gerente', 'Contador', 'Cliente']),
    validarCampos
],
postUsuario)

// router.put('/', putUsuario)
// router.patch('/', patchUsuario)
 router.delete('/', deleteUsuario)
module.exports = router