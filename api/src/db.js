require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;
const {
	DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
  } = process.env;

// const DATABASE_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/games`

const sequelize = new Sequelize(DATABASE_URL, {
	logging: false, // set to console.log to see the raw SQL queries
	native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Game, Genre,Order, User, Comment } = sequelize.models;
Game.belongsToMany(Genre, { through: "genres_games" });
Genre.belongsToMany(Game, { through: "genres_games" });
User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);
Game.hasMany(Comment);
Comment.belongsTo(Game);

Order.belongsToMany(Game, { through: "orders_games" });
Game.belongsToMany(Order, { through: "orders_games" })


// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
	Op,
};
