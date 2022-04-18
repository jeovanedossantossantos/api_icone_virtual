const { Model } = require("sequelize");

class Favorito extends Model{
    static init(sequelize) {
        super.init({
        }, {
            sequelize
        })

       
        return this
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as: 'usr'})
        this.belongsTo(models.Produto, {foreignKey: 'produto_id', as: 'produto'})
    }

}

module.exports = Favorito