const express = require('express')
const controllerUser = require("../controllers/controllerUser")

const routes = express.Router();

routes.get('/',(req,res) => {
    res.send("Olá mundo!")
})

routes.post('/sigin',controllerUser.register)
routes.post('/like',controllerUser.like)

module.exports = routes