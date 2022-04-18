const Usuario = require("../app/models/Usuario")

module.exports = async (req, res, next) => {
    const user = await Usuario.findByPk(req.id_user);
    if(user.tipo !== "root"){
        return res.status(401).json({message:"Não autorizado!"})
    }

    return next()
}