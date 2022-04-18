const express = require('express');
const cors = require('cors');

require('./src/database')
const allRoutes = require('./src/routes')
const handleError = require('./src/middlewares/handleError')

class App {
    constructor(){
        this.server = express()
        this.middleware()
        this.routes()
    }
    routes(){
        this.server.use(allRoutes)
    }
    middleware(){
        this.server.use((req, res, next)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
            this.server.use(cors());
            next();
        })
        this.server.use(handleError)
        this.server.use(express.json())
    }

}

module.exports = new App().server