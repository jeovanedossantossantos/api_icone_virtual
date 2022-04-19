'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=> {
   
    return queryInterface.addColumn('usuarios', 'img_perfil', { 
      type: Sequelize.STRING,
      allowNull: true,

    });
    
  },

  down:(queryInterface, Sequelize)=>{
   
     return queryInterface.removeColumn('usuarios', 'img_perfil');
   
  }
};
