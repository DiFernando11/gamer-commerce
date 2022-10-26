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
				defaultValue: "https://www.ipnie.com/wp-content/uploads/2021/02/profile.jpeg"
			},
			google: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			birthday: {
				type: DataTypes.DATEONLY
			},
			country: {
				type: DataTypes.STRING
			},
			promotion: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			}
		},
		{ timestamps: true, createdAt: 'creado', updatedAt: false }
	);
};
//as