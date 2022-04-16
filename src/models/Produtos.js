const db = require('../db')
const { DataTypes } = require("sequelize")

const Produtos = db.db.define("Produtos",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,

    },
    decricao:{
        type: DataTypes.STRING,
        
    },
    preco:{
        type: DataTypes.STRING,
        
    },
    img_1:{
        type: DataTypes.STRING,
        
    },
    img_2:{
        type: DataTypes.STRING,
        
    },
    img_3:{
        type: DataTypes.STRING,
        
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "produtos",
})

module.exports = Produtos