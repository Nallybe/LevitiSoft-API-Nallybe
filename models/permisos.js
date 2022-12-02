const {Schema, model} = require('mongoose')

const PermisosSchema = Schema ({
    idPermiso:{
        type: Number
    },
    nombre:{
        type: String
    },
    estado:{
        type: String
    }
})

module.exports = model('permisos' , PermisosSchema)