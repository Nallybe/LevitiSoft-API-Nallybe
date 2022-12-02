const {Router} = require('express')
const router = Router()

const { postAsignacion, getAsignacion, putAsignacion, patchAsignacion, deleteAsignacion } = require('../controller/asignacion')

router.get('/',getAsignacion)
router.post('/', postAsignacion )
router.put('/', putAsignacion)
router.patch('/', patchAsignacion)
router.delete('/', deleteAsignacion)





module.exports = router