const {Schema, model} = require('mongoose')

const RolesSchema = Schema ({
    idRol:{
        type: Number,
        required: [true, 'El id Rol es obligatorio']
    },
    nombre:{
        type: String,
        required: [true, 'El nombre del rol es obligatorio'],
        unique: true
    },
    estado:{
        type: Boolean,
        defaul: true
    }
})

module.exports = model('roles' , RolesSchema)