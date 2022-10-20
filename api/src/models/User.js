const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'user',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastname: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			age: {
				type: DataTypes.INTEGER,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			isBanned: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			profilePicture: {
				type: DataTypes.TEXT,
			},
			birthday:{
				type: DataTypes.DATEONLY
			},
			country:{
				type: DataTypes.STRING
			}
		},
		{ timestamps: true, createdAt: 'creado', updatedAt: false }
	);
};
