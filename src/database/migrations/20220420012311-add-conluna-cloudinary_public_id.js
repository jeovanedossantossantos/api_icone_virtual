'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=> {
   
    return queryInterface.addColumn('usuarios', 'cloudinary_public_id', { 
      type: Sequelize.STRING,
      allowNull: true,

    });
    
  },

  down:(queryInterface, Sequelize)=>{
   
     return queryInterface.removeColumn('usuarios', 'cloudinary_public_id');
   
  }
};
