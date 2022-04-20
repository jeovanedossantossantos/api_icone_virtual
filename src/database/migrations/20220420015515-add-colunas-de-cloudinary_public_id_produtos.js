'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=> {

    queryInterface.addColumn('produtos', 'cloudinary_public_id_img1', { 
      type: Sequelize.STRING,
      allowNull: true,

    });
    queryInterface.addColumn('produtos', 'cloudinary_public_id_img2', { 
      type: Sequelize.STRING,
      allowNull: true,

    });
    return queryInterface.addColumn('produtos', 'cloudinary_public_id_img3', { 
      type: Sequelize.STRING,
      allowNull: true,

    });
    
  },

  down:(queryInterface, Sequelize)=>{
    queryInterface.removeColumn('produtos', 'cloudinary_public_id_img1')
    queryInterface.removeColumn('produtos', 'cloudinary_public_id_img2')
   
     return queryInterface.removeColumn('produtos', 'cloudinary_public_id_img3');
   
  }
};
