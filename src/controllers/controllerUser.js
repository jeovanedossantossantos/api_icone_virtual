const {User} = require('../models')
const bcrypt = require('bcrypt')

const controllerUser = {
    async register(req, res){
        console.log(req.body)
        const {nome, email, senha, endereco} = req.body;
        const newPasword = bcrypt.hashSync(senha,8)

        try{
            if(nome !== "" && email !== "" && senha.length >= 8){
                const newUsuario = await User.create({
                    nome, 
                    type:"cliente",
                    email, 
                    senha:newPasword,
                    endereco,
                });
                // const protudo = await Produtos.findByPk(protudos_id)
                // await newUsuario.setProduto(protudo)
                res.status(201).json(newUsuario);
                
              
            }else{
                res.status(404).json({"message":"Preenchas os campos ou suas senha é considerada não segura!"})
            }
        }catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    },


    async like(req, res){
        const {id,protudos_id} = req.body;
        const usuario = await User.findOne({
            where: {
                id:id
            }
        })
        const protudo = await Produtos.findByPk(protudos_id)
        const resultado = await usuario.setProduto(protudo)

        res.status(200).json(resultado)
        
    }
}

module.exports = controllerUser