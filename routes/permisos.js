const {Router} = require('express')
const router = Router()
const { check } = require('express-validator')
const { validarCampos } = require('../middelewares/validar-campos')

const { postPermisos, getPermisos, putPermisos, deletePermisos } = require('../controller/permisos')

router.get('/',getPermisos)
router.post('/', [
    check('idPermiso', 'El id del permiso es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'No es un permiso válido ').isIn(['Dashboard', 'Roles', 'Usuarios', 'Compras', 'Insumos', 'Producción', 'Productos', 'CLientes', 'Carrito de compras', 'Ventas', 'Reparaciones']),
    validarCampos
], postPermisos )
router.put('/', putPermisos )
//router.patch('/', patchPermisos )
router.delete('/', deletePermisos )




module.exports = router