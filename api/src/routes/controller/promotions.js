const { Router } = require('express');
const router = Router();
const { Game, User } = require('../../db');
const emailer1 = require('../../emailer1');

// get a promotions/
router.get('/', async (req, res) => {
	try {
		const users = await User.findAll({
			where: {
				promotion: true,
			},
			attributes: ['email', 'name'],
		});

		const games = await Game.findAll({
			where: {
				with_discount: true,
			},
			attributes: ['id', 'name', 'image', 'price', 'discount'],
		});
		const arr = [];
		for (let i = 0; i < users.length; i++) {
            arr.push(users[i].email)
        }
		// emailer1.sendMail('facundo.eet2@gmail.com', 'facundo', games.sort((a, b) => (b.price - b.discount) - (a.price - a.discount)))
		// emailer1.sendMail( games )
		const response = await emailer1.sendMail(arr, 'User', games);
		res.status(200).json(response);
		//res.status(200).json(userBD)
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: 'There was an error in the route GET' });
	}
});

module.exports = router;
