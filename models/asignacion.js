const {Schema, model} = require('mongoose')

const AsignacionSchema = Schema ({
    idAsignacion:{
        type: Number
    },
    idRol:{
        type: Number
    },
    idPermiso:{
        type: Number
    },
    Estado:{
        type: String
    }
})

module.exports = model('asignacion' , AsignacionSchema)