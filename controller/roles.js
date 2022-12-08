const{response}= require('express')
const Roles = require('../models/roles')

const getRoles = async (req, res=response)=> {

    const roles = await Roles.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Roles',
        roles
    })
}

const postRoles = async (req,res) =>{
    //Desestructuración
    const {idRol, nombre, estado} = req.body
    //Recibir parametros y desestructurarlos
    //Instanciar el objeto con los parametros y recibirlos
    const roles = new Roles({idRol, nombre, estado})

    await roles.save()

    res.json({
        msg: 'POST API Roles',
        roles
    })


}

//Modificar todos los valores
const putRoles = async(req, res)=>{
    //Desestructuracion
    const { idRol, nombre, estado } = req.body
    const roles = await Roles.findOneAndUpdate( {idRol: idRol}, {nombre: nombre, estado: estado})

    res.json({
        msg: "PUT API Roles",
        roles
    })
}

/* //Modificaciones parciales
const patchRoles = async(req,res)=>{
    const { idRol, nombre, estado} = req.body
    const roles = await Roles.findOneAndUpdate({idRol:idRol}, {nombre: nombre, estado: estado})

    res.json({
        msg: "PATCH API Roles",
        roles
    })
} */

//Eliminar
const deleteRoles = async(req, res) =>{
    const { idRol } = req.query

    const roles = await Roles.findOneAndDelete({idRol : idRol})//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API Roles',
        roles
    })
}

module.exports = {
    getRoles,
    postRoles,
    putRoles,
    //patchRoles,
    deleteRoles
}
