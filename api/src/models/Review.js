const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('review', {
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
        { timestamps: false, createdAt: "creado", updatedAt: false }
    );
};