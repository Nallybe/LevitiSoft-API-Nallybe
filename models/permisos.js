const {Schema, model} = require('mongoose')

const PermisosSchema = Schema ({
    idPermiso:{
        type: Number,
        required: [true, 'El id permiso es obligatorio'],
        unique: true
    },
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    estado:{
        type: Boolean,
        defaul: true
    }
})

module.exports = model('permisos' , PermisosSchema)