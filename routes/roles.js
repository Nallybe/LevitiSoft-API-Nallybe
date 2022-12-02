const {Router} = require('express')
const router = Router()

const { postRoles, getRoles, putRoles, patchRoles,deleteRoles } = require('../controller/roles')

router.get('/',getRoles)
router.post('/', postRoles )
router.put('/', putRoles )
router.patch('/', patchRoles )
router.delete('/', deleteRoles )



module.exports = router