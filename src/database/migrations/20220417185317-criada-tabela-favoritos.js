'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('favoritos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'produtos', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'usuarios', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    
    return queryInterface.dropTable('favoritos');
  }
};
