const {Router} = require('express')
const router = Router()

const { postPermisos, getPermisos, putPermisos, patchPermisos, deletePermisos } = require('../controller/permisos')

router.get('/',getPermisos)
router.post('/', postPermisos )
router.put('/', putPermisos )
router.patch('/', patchPermisos )
router.delete('/', deletePermisos )




module.exports = router