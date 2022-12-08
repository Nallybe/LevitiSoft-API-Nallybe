const {Router} = require('express')
const router = Router()
const { check } = require('express-validator')

const { postRoles, getRoles, putRoles, deleteRoles } = require('../controller/roles')
const { validarCampos } = require('../middelewares/validar-campos')

router.get('/',getRoles)
router.post('/', [
    check('idRol', 'El id del rol es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'No es un rol válido ').isIn(['Admin', 'Gerente', 'Contador', 'Cliente']),
    validarCampos
], 
postRoles )
router.put('/', putRoles )
//router.patch('/', patchRoles )
router.delete('/', deleteRoles )



module.exports = router