const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Produto = require('../app/models/Produto')
const Usuario = require('../app/models/Usuario')
const Favorito = require('../app/models/Favorito')

const models = [Produto, Usuario, Favorito];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    console.log("Conexão realizada com sucesso");
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

}

module.exports = new Database()