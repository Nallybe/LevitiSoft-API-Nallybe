const {Router} = require('express')
const router = Router()
const { check } = require('express-validator')
const { validarCampos } = require('../middelewares/validar-campos')

const { postAsignacion, getAsignacion, putAsignacion, deleteAsignacion } = require('../controller/asignacion')

router.get('/',getAsignacion)
router.post('/', [
    check('idAsignacion', 'El id de la asignación es obligatorio').not().isEmpty(),
    check('idRol', 'El id del rol es obligatorio').not().isEmpty(),
    check('idPermiso', 'El id del permiso es obligatorio').not().isEmpty(),
    validarCampos
], postAsignacion )
router.put('/', putAsignacion)
//router.patch('/', patchAsignacion)
router.delete('/', deleteAsignacion)





module.exports = router