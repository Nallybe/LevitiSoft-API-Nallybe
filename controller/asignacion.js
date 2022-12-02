const{response}= require('express')
const Asignacion = require('../models/asignacion')

const getAsignacion = async (req, res=response)=> {

    const asignacion = await Asignacion.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Asignacion',
        asignacion
    })
}

const postAsignacion = async (req,res) =>{
    //Desestructuración
    const {idAsignacion, idRol, idPermiso, Estado} = req.body
    //Recibir parametros y desestructurarlos
    //Instanciar el objeto con los parametros y recibirlos
    const asignacion = new Asignacion({idAsignacion, idRol, idPermiso, Estado})

    await asignacion.save()

    res.json({
        msg: 'POST API Asignacion',
        asignacion
    })


}

//Modificar todos los valores
const putAsignacion = async(req, res)=>{
    //Desestructuracion
    const { idAsignacion, idRol, idPermiso, Estado } = req.body
    const asignacion = await Asignacion.findOneAndUpdate({idAsignacion: idAsignacion,}, {idRol: idRol, idPermiso: idPermiso, Estado: Estado})

    res.json({
        msg: "PUT API Asignacion",
        asignacion
    })
}

//Modificaciones parciales
const patchAsignacion = async(req,res)=>{
    const { idAsignacion, idRol, Estado} = req.body
    const asignacion = await Asignacion.findOneAndUpdate({idAsignacion: idAsignacion}, {idRol: idRol, Estado: Estado})

    res.json({
        msg: "PATCH API Asignacion",
        asignacion
    })
}

//Eliminar
const deleteAsignacion = async(req, res) =>{
    const { idAsignacion } = req.query

    const asignacion = await Asignacion.findOneAndDelete({idAsignacion : idAsignacion})//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API Asignacion',
        asignacion
    })
}

module.exports = {
    getAsignacion,
    postAsignacion,
    putAsignacion,
    patchAsignacion,
    deleteAsignacion
}
