const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const bcrypt = require('bcrypt')

class Usuario extends Model{
    static init(sequelize) {
        super.init({
           nome:  Sequelize.STRING,
           email: Sequelize.STRING,
           senha: Sequelize.VIRTUAL,
           senha_hash: Sequelize.STRING,
           endereco: Sequelize.STRING,
           telefone: Sequelize.STRING,
           img_perfil: Sequelize.STRING,
           cloudinary_public_id: Sequelize.STRING,
           tipo: Sequelize.ENUM('cliente', 'root'),
        }, {
            sequelize
        })

        this.addHook('beforeSave', async (user) => {
            if(user.senha) {
                user.senha_hash = await bcrypt.hash(user.senha, 8)
            }
        })

        return this
    }
    static associate(models){
        this.hasMany(models.Favorito,{foreignKey:'usuario_id',as:"likes"})
    }
    checkPassword(password) {
        return bcrypt.compare(password, this.senha_hash)
    }

}

module.exports = Usuario