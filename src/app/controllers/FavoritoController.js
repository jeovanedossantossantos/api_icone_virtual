const Favorito = require("../models/Favorito")
const Produto = require("../models/Produto")

class FavoritoController {
    async create(req, res) {
        const { produto_id } = req.params

        const produto = await Produto.findByPk(produto_id)
        if(!produto) res.status(400).json({messagem: "Produto não encontrado"})
        
        const likeExists = await Favorito.findOne({
            where: {
                produto_id,
                usuario_id: req.id_user
            }
        })

        if(likeExists) return res.json(likeExists)


        const like = await Favorito.create({
            produto_id,
            usuario_id: req.id_user
        })

        return res.json(like)
    }

    async delete(req, res) {
        const {id} = req.params

        const likeExists = await Favorito.findOne({
            where: {
                id,
                usuario_id: req.id_user
            }
        })

        if(!likeExists) return res.status(400).json({messagem: "Like não encontrado"})

        await likeExists.destroy()
        return res.status(204).json()

    }
}

module.exports = new FavoritoController()

