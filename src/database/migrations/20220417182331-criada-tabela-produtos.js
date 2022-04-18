'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      img1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      img2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      img3: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('produtos');
  }
};
