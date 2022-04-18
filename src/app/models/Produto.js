const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Produto extends Model{
    static init(sequelize) {
        super.init({
           nome:  Sequelize.STRING,
           descricao: Sequelize.STRING,
           preco: Sequelize.FLOAT,
           img1: Sequelize.STRING,
           img2: Sequelize.STRING,
           img3: Sequelize.STRING,
        }, {
            sequelize
        })

        return this
    }
    static associate(models) {
        this.hasMany(models.Favorito, {foreignKey: "produto_id", as: "likes"})
    }
}

module.exports = Produto