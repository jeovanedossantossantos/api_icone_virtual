const express = require('express')
const controllerUser = require("../controllers/controllerUser")

const routes = express.Router();

routes.get('/',(req,res) => {
    res.send("Olá mundo!")
})

routes.post('/sigin',controllerUser.register)
routes.post('/like',controllerUser.like)
routes.delete('/:id',controllerUser.delete)
routes.put('/:id',controllerUser.updateUser)
routes.get('/list-users',controllerUser.getAll)
routes.get('/user-one/:id',controllerUser.getOne)
module.exports = routes