const {Schema, model} = require('mongoose')

const AsignacionSchema = Schema ({
    idAsignacion:{
        type: Number,
        required: [true, 'El id asignación es obligatorio'],
        unique: true
    },
    idRol:{
        type: Number,
        required: [true, 'El id rol es obligatorio']
    },
    idPermiso:{
        type: Number,
        required: [true, 'El id permiso es obligatorio']
    },
    Estado:{
        type: Boolean,
        defaul: true
    }
})

module.exports = model('asignacion' , AsignacionSchema)