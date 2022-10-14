const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('game', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    website: {
      type: DataTypes.TEXT
    },
    developers: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    requirements_min: {
      type: DataTypes.TEXT
    },
    requirements_rec: {
      type: DataTypes.TEXT
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    show: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    createdAt: false,
    updatedAt: false
  });
};

