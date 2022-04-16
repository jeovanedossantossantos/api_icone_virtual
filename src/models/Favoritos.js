const db = require('../db')
const {DataTypes} = require("sequelize")

const Usuarios = require('./Usuario')
const Produtos = require('./Produtos')

const Favoritos = db.db.define("Favoritos",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    protudos_id: {
        type: DataTypes.INTEGER,
        reference:{
            model: Produtos,
            key:"id"
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        reference:{
            model: Usuarios,
            key:"id"
        },
    },createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },

},{
    tableName: "favoritos",
})

module.exports = Favoritos