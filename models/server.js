const express = require("express")
const cors = require('cors')
const dbConnection = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.asignacionPath = "/api/asignacion"
        this.rolesPath = "/api/roles"
        this.permisosPath = "/api/permisos"
        this.authPath = "/api/auth"
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    async dbConectar(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.authPath, require("../routes/auth"))
        this.app.use(this.asignacionPath, require("../routes/asignacion"))
        this.app.use(this.rolesPath, require("../routes/roles"))
        this.app.use(this.permisosPath, require("../routes/permisos"))
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Escuchando desde ${this.port}`)
        })
    }

}

module.exports = Server