
const { generarJWT } = require('../helpers/generar-jwt')
const Roles = require ('../models/roles')

//const {generarJWT} = require('../helpers/generar-jwt)

const login = async (req, res)=>{
    //Desectructuración
const { idRol, nombre } = req.body

    try {
        //Verificar si el id rol existe
        const roles = await Roles.findOne({idRol})
        
        if(!roles){
            return res.status(400).json({
                msg: 'El id Rol no fue encontrado'})
        }
        //Verificar estado
        if (roles.estado != true) {
            return res.status(400).json({
                msg: 'El rol esta deshabilitado para acceder'})
        } 
        //Verificar nombre
        if (roles.nombre != nombre) {
            return res.status(400).json({
                msg: 'El nombre no corresponde al id rol buscado'})
        }
        
        //Generar el JWT: Jason Web Token
        const token = await generarJWT(roles.id)

        return res.json({
            roles,
            token
        })

    } catch (err){
        console.log('Error, contacte al administrador' +  err)
    }

    
}





module.exports ={
    login
}