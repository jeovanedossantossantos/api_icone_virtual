const Produtos = require('./Produtos')
const Favoritos = require('./Favoritos')
const User = require('./Usuario')

Produtos.belongsToMany(User, {
    foreignKey: 'protudos_id',
    through:Favoritos,
    as: "user"

})
User.belongsToMany(Produtos, {
    foreignKey: 'user_id',
    through:Favoritos,
    as: "produtos"
    
})

module.exports ={
    Produtos,
    Favoritos,
    User,
}