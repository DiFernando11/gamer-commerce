const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('cartfav', {
    
    cart: {
      type: DataTypes.BOOLEAN
    }
  },
    { timestamps: true, createdAt: "creado", updatedAt: false }
  );
};