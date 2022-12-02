const{response}= require('express')
const Permisos = require('../models/permisos')

const getPermisos = async (req, res=response)=> {

    const permisos = await Permisos.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Permisos',
        permisos
    })
}

const postPermisos = async (req,res) =>{
    //Desestructuración
    const {idPermiso, nombre, estado} = req.body
    //Recibir parametros y desestructurarlos
    //Instanciar el objeto con los parametros y recibirlos
    const permisos = new Permisos({idPermiso, nombre, estado})

    await permisos.save()

    res.json({
        msg: 'POST API Permisos',
        permisos
    })


}

//Modificar todos los valores
const putPermisos = async(req, res)=>{
    //Desestructuracion
    const { idPermiso, nombre, estado } = req.body
    const permisos = await Permisos.findOneAndUpdate({idPermiso: idPermiso,}, {nombre: nombre, estado: estado})

    res.json({
        msg: "PUT API Permisos",
        permisos
    })
}

//Modificaciones parciales
const patchPermisos = async(req,res)=>{
    const { nombre, estado} = req.body
    const permisos = await Permisos.findOneAndUpdate({nombre: nombre}, {estado: estado})

    res.json({
        msg: "PATCH API Permisos",
        permisos
    })
}

//Eliminar
const deletePermisos = async(req, res) =>{
    const { idPermiso } = req.query

    const permisos = await Permisos.findOneAndDelete({idPermiso : idPermiso})//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API Permisos',
        permisos
    })
}

module.exports = {
    getPermisos,
    postPermisos,
    putPermisos,
    patchPermisos,
    deletePermisos
}
