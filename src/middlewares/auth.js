const jwt = require('jsonwebtoken')
const authConfig = require('../config/authConfig.json')
const {promisify} = require('util')

module.exports = async (req, res, next) => {
    const authorization = req.headers.authorization

    if(!authorization) return res.status(401).json({messagem: "Token não enviado"})
    const [, token] = authorization.split(' ')
    
    try{
        const decoded = await promisify(jwt.verify)(token, authConfig.secret)

        req.id_user = decoded.id
        return next()
    }catch(error) {
        return res.status(401).json({messagem: "Token inválido"})
    }
}