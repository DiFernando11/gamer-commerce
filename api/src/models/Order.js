const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('order', {
    stripeId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    { timestamps: true, createdAt: "creado", updatedAt: false }
  );
};