const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_KEY);
// const cors = require('cors')
const { Order, Game, User } = require('../../db');
const emailer = require('../../emailer');
// router.use(cors({ origin: "http://localhost:3000" }));

router.post('/', async (req, res) => {
	const { stripeId, userId, amount, cart } = req.body;
	
	const user = await User.findByPk(userId);
	if (user && stripeId) {
		try {
			const payment = await stripe.paymentIntents.create({
				// Confirma el pago y devuelve un objeto con el pago registrado
				amount,
				currency: 'USD',
				payment_method: stripeId,
				confirm: true, //confirm the payment at the same time
			});

			let newOrder = await Order.create(
				{
					stripeId: payment.payment_method,
					userId,
					state: payment.status,
					amount:
						payment.status === 'requires_action' ? 0 : payment.amount / 100,
				},
				{
					include: [User],
				}
			);
			cart?.forEach(async (el) => {
				let gameDb = await Game.findAll({
					where: { id: el },
				});
				await newOrder.addGame(gameDb);
			});
			emailer.sendMail(user, amount);
			return res.status(200).json({ message: 'Successful Payment' });
		} catch (error) {
			console.log(error);

			let errorOrder = await Order.create(
				{
					stripeId,
					userId,
					state: 'requires_payment_method',
					amount: 0,
				},
				{
					include: [User],
				}
			);

			cart?.forEach(async (el) => {
				let gameDb = await Game.findAll({
					where: { id: el },
				});
				await errorOrder.addGame(gameDb);
			});

			return res.json({ message: 'Invalid card.' });
		}
	} else {
		res.status(404).json([]);
	}
});

module.exports = router;
