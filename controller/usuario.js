const{response}= require('express')
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')

//Obtener
const getUsuario = async (req, res)=> {

    const usuarios = await Usuario.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Usuario',
        usuarios
    })
}   

//Enviar
const postUsuario = async (req,res) =>{
    //Desestructuración
    const {nombre, correo, password, rol, estado} = req.body
    //Recibir parametros y desestructurarlos
    
    //Instanciar el objeto con los parametros y recibirlos
    const usuario = new Usuario({nombre, correo, password, rol, estado})

    //Encriptación
    usuario.password = bcrypt.hashSync(password, 10)//Algoritmo que encripta

    await usuario.save()//Guardar en la base de datos

    res.json({
        msg: 'POST API Usuario',
        usuario
    })
}
 
//Modificar todos los valores
const putUsuario = async(req, res)=>{
    //Desestructuracion
    const { nombre, correo , password, rol, estado } = req.body
    const usuario = await Usuario.findOneAndUpdate({nombre: nombre}, {correo: correo, password: password, rol: rol, estado: estado})
    
    res.json({
        msg: "PUT API Usuario",
        usuario
    })
}

/* //Modificaciones parciales
const patchUsuario = async(req,res)=>{
    const { correo, estado} = req.body
    const usuario = await Usuario.findOneAndUpdate({correo: correo}, {estado: estado})

    res.json({
        msg: "PATCH API Usuario",
        usuario
    })
} */

//Eliminar
const deleteUsuario = async(req, res) =>{
    const { correo } = req.query

    const usuario = await Usuario.findOneAndDelete({correo : correo})//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API Usuario',
        usuario
    })
}  

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    // patchUsuario,
    deleteUsuario
   
}
