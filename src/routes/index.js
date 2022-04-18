const express = require('express');
const FavoritoController = require('../app/controllers/FavoritoController');
const ProdutoController  = require('../app/controllers/ProdutoController');
const SessionController = require('../app/controllers/SessionController');
const UserController = require('../app/controllers/UserController');
const auth = require('../middlewares/auth');
const root = require('../middlewares/root');

const routes = express.Router();

routes.get('/',(req,res) => {
    res.send("Olá mundo!")
})
routes.post('/session', SessionController.create)

routes.post('/users', UserController.create)
routes.get('/users/:id', UserController.index)

routes.delete('/users/:id', UserController.delete)
routes.put('/users/:id', UserController.update)

routes.get('/products/:id', ProdutoController.index)
routes.get('/products', ProdutoController.list)


routes.use(auth)
routes.post('/likes/:produto_id', FavoritoController.create)
routes.delete('/likes/:id', FavoritoController.delete)

routes.use(root)
routes.get('/users', UserController.list)
routes.post('/products', ProdutoController.create)
routes.put('/products/:id', ProdutoController.update)
routes.delete('/products/:id', ProdutoController.delete)



module.exports = routes