
const { Game, User, Comment } = require("../../db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { toCapitalize } = require("../../utils/utils");

const {
	encryptKey,
	encryptRounds,
	encryptExpiration
} = process.env;

let updateGame = async (req, res) => {
	//ejemplo actualziar gtav update/3498?price=50
	const { id } = req.params;
	const { name, description, image, price, show, discount } = req.query;
	//const arrKey = Object.keys(req.query);

	try {
		if (name) await Game.update({ name }, { where: { id: id } })
		if (description) await Game.update({ description }, { where: { id: id } })
		if (image) await Game.update({ image }, { where: { id: id } })
		if (price) await Game.update({ price }, { where: { id: id } })
		if (show) await Game.update({ show }, { where: { id: id } })
		if (discount) {
			if (discount > 0) {
				await Game.update({ with_discount: true }, { where: { id: id } })
			} else if (discount == 0) {
				await Game.update({ with_discount: false }, { where: { id: id } })
			}
			await Game.update({ discount }, { where: { id: id } })
		}
		res.status(201).json({ msg: `Game update` });
	} catch (e) {
		console.log(e)
		res.status(404).json({ msg: 'Error update' });
	}

	// if(arrKey[0]==="price"|| arrKey[0]==="show"|| arrKey[0]==="discount"){

	// 	try {
	// 		await Game.update({ [arrKey[0]]: req.query[arrKey[0]] }, { where: { id: id } })
	// 		res.status(201).json({ msg: `Game ${arrKey[0]} Updated` });
	// 	} catch (e) {
	// 		res.status(404).json({ error: e.message });
	// 	}
	// }
	// else {
	// 	res.status(404).json({ error: "Solo puede modificar query price o show" });

	// }
};

let updateBanned = async (req, res) => {
	//ejemplo actualziar gtav update/3498?price=50
	const { id } = req.params;
	const { banned } = req.query;
	if (banned) {

		try {

			await User.update({ isBanned: banned }, { where: { id: id } })
			res.status(201).json({ msg: `user update` });
		} catch (e) {
			res.status(404).json({ error: e.message });
		}

	} else {
		res.status(404).json({ error: "Solo puede modificar query banned" });

	}

};

let hideComment = async (req, res) => {
	//ejemplo actualziar gtav update/3498?price=50
	const { id } = req.params;
	const { show } = req.query;
	if (show) {

		try {

			await Comment.update({ show, }, { where: { id: id } })
			res.status(201).json({ msg: `Comment update` });
		} catch (e) {
			res.status(404).json({ error: e.message });
		}

	} else {
		res.status(404).json({ error: "Solo puede modificar query show" });

	}

};

let updateUser = async (req, res) => {

	const { id } = req.params;
	const { name, lastname, password, country } = req.query;
	// const arrKey = Object.keys(req.query);

	let passwordEncrypt = bcrypt.hashSync(password, Number.parseInt(encryptRounds));
	let nameCapitalized = toCapitalize(name)
	let lastNameCapitalized = toCapitalize(lastname)

	try {

		if (name) await User.update({ name: nameCapitalized }, { where: { id: id } })

		if (lastname) await User.update({ lastname: lastNameCapitalized }, { where: { id: id } })

		if (country) await User.update({ country }, { where: { id: id } })

		if (password) await User.update({
			password: passwordEncrypt
		},
			{ where: { id: id } }).then(user => {

				// Creamos el token
				let token = jwt.sign({ user: user }, encryptKey, {
					expiresIn: encryptExpiration
				});

				// res.json({
				// 	user: user,
				// 	token: token
				// });

			}).catch(err => {
				res.status(500).json(err);
			});

		res.status(201).json({ msg: `User update` });
	} catch (e) {
		console.log(e)
		res.status(404).json({ msg: 'Error update' });
	}
};

module.exports = {
	updateGame,
	updateBanned,
	hideComment,
	updateUser
};