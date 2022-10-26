const { Order, User, Game } = require('../../db.js');

let createOrder = async (req, res) => {
	//Amount debe ser enviado por front la suma de sus juegos en number
	//gameId debe ser un array de id de games del carrito
	//user id la sesion de usuario la debe entregar
	const { amount, userId, gameId } = req.body;

	if (amount && userId && gameId) {
		try {
			const newOrder = await Order.create({
				amount,
			});

			const user = await User.findOne({
				where: {
					id: userId,
				},
			});

			await user?.addOrder(newOrder);

			gameId.forEach(async (el) => {
				console.log('entrro al bucle');
				let game = await Game.findOne({
					where: {
						id: el,
					},
				});
				console.log(game.name);

				await game?.addOrder(newOrder);
			});

			res.status(201).json({ msg: `Order Created` });
		} catch (e) {
			res.status(404).json({ msg: `e.message` });
		}
	} else {
		res.status(404).json({ msg: `You must complete all fields` });
	}
};

module.exports = {
	createOrder,
};
