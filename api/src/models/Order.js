const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('order', {
    stripeId: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING
    }
  },
    { timestamps: true, createdAt: "creado", updatedAt: false }
  );
};