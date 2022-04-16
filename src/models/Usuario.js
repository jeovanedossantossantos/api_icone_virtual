const db = require("../db")
const { DataTypes } = require("sequelize")

const Usuarios = db.db.define("Usuarios", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type:{
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING

    },
    email: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
    
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    
}, {
    tableName: "user",
}
);
module.exports = Usuarios