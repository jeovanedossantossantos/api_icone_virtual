const { User, Favoritos, Produtos } = require('../models')
const bcrypt = require('bcrypt')

const controllerUser = {
    async register(req, res) {
        console.log(req.body)
        const { nome, email, senha, endereco } = req.body;
        const newPasword = bcrypt.hashSync(senha, 8)

        try {
            if (nome !== "" && email !== "" && senha.length >= 8) {
                const newUsuario = await User.create({
                    nome,
                    type: "cliente",
                    email,
                    senha: newPasword,
                    endereco,
                });
                // const protudo = await Produtos.findByPk(protudos_id)
                // await newUsuario.setProduto(protudo)
                res.status(201).json(newUsuario);


            } else {
                res.status(404).json({ "message": "Preenchas os campos ou suas senha é considerada não segura!" })
            }
        } catch (err) {
          
            res.status(500).json(err)
        }
    },
    async delete(req, res) {
        const { id } = req.params
        try {
            const usuario = await User.destroy({
                where: {
                    id
                }
            })
        
            if (usuario === 1) {
                res.status(200).json({ message: "Successfully deleted!" })

            } else {
                res.status(404).json({ message: "Not found!" })
            }
        } catch (e) {
            res.status(500).json(e)
        }
    },
    async updateUser(req, res) {
        const { id } = req.params
        const { nome, email, endereco } = req.body

        try {
            const usuario = await User.update({
                nome,
                email,
                endereco
            }, {
                where: {
                    id
                }
            })
         
            if (usuario[0] === 1) {
                res.status(200).json({ message: "Successfully updated!" })
            } else {
                res.status(404).json({ message: "oops" })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getAll(req, res) {

        try {
            const usuarios = await User.findAll()
           
            res.status(200).json(usuarios)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    async getOne(req, res) {
        try{
            const {id} = req.params
            const usuario = await User.findOne({
            where: {
                id
            }})
           if(usuario!== null) {

            res.status(200).json(usuario)
           }else{
               res.status(404).json({message:"Not Found!"})
           }
        }catch(err){
            res.status(500).json(err)

        }
    },
    async like(req, res) {
        const { id, protudos_id } = req.body;
        const usuario = await User.findOne({
            where: {
                id: id
            }
        })
        const protudo = await Produtos.findByPk(protudos_id)
        const resultado = await usuario.setProduto(protudo)

        res.status(200).json(resultado)

    }
}

module.exports = controllerUser