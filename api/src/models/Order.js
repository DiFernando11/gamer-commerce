const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('order', {

      amount: {
        type: DataTypes.INTEGER,
        allowNull:false
      }
    },
    { timestamps: true, createdAt: "creado", updatedAt: false }
    );
  };