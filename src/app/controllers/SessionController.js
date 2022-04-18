const Usuario = require("../models/Usuario")
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/authConfig.json')

class SessionController {
    async create(req, res) {
        const { email, senha } = req.body

        if(!email || !senha) return res.status(400).json({messagem: "Campos obrigatórios não informados!"})
        
        const userExists = await Usuario.findOne({
            where: {email}
        })

        if(!userExists) return res.status(401).json({messagem: "Usuário inexistente!"})

        if(!await userExists.checkPassword(senha)){
            return res.status(401).json({messagem: "Senha incorreta"})
        }

        const {id, nome} = userExists;

        return res.json({
            usuario: {
                id,
                nome,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })
    }

}

module.exports = new SessionController