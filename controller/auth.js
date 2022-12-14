
const { generarJWT } = require('../helpers/generar-jwt')
const Usuario = require ('../models/usuario')
const bcrypt = require('bcryptjs')

//const {generarJWT} = require('../helpers/generar-jwt)

const login = async (req, res)=>{
    //Desectructuración
    const { correo, password } = req.body

    try {
        //Verificar si el correo existe
        const usuarios = await Usuario.findOne({correo})
        
        if(!usuarios){
            return res.status(400).json({
                msg: 'El correo no fue encontrado'})
        }
        //Verificar estado
        if (usuarios.estado != true) {
            return res.status(400).json({
                msg: 'El usuario esta deshabilitado para acceder'})
        } 
        
        
        //Generar el JWT: Jason Web Token
        const token = await generarJWT(usuarios.id)

        return res.json({
            usuarios,
            token
        })
        
    } catch (err){
        console.log('Error, contacte al administrador' +  err)
    }

      //trycatch para la password
      try {

        const usuarios = await Usuario.findOne({ correo })

        //Verificar password
        const match = await bcrypt.compare(password, usuarios.password);
        if (!match) {
            return res.status(400).json({
                msg: 'La contraseña no corresponde al correo buscado'
            })
        }

    } catch (err) {
        console.log('Error, contacte al administrador' + err)
    }

    
}





module.exports ={
    login
}