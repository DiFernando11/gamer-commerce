const express = require('express')
const router = express.Router()
const Stripe = require("stripe");
const stripe = new Stripe(process.env.KEY);
const cors = require('cors')
const { Order, Game, User } = require('../db')

router.use(cors({ origin: "http://localhost:3000" }));

router.post("/", async (req, res) => {

    const { stripeId, userId, amount, cart } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({ // Confirma el pago y devuelve un objeto con el pago registrado
            amount,
            currency: "USD",
            payment_method: stripeId,
            confirm: true, //confirm the payment at the same time
        });

        console.log(payment)

        // let newOrder = await Order.create({
        //     stripeId: payment.payment_method,
        //     userId,
        //     state: payment.status,
        //     amount: payment.amount,
        // }, {
        //     include: [User]
        // })

        // cart.forEach(async el => {
        //     let gameDb = await Game.findAll({
        //         where: { id: el.id },
        //     });
        //     await newOrder.addGame(gameDb);
        // });

        return res.status(200).json({ message: "Successful Payment" });
    } catch (error) {
        //console.log(error);

        // let errorOrder = await Order.create({
        //     stripeId: error.raw.payment_intent.id,
        //     userId,
        //     state: error.raw.payment_intent.status,
        //     amount: 0,
        // }, {
        //     include: [User]
        // })

        // cart.forEach(async el => {
        //     let gameDb = await Game.findAll({
        //         where: { id: el.id },
        //     });
        //     await errorOrder.addGame(gameDb);
        // });

        return res.json([]);
    }
});

module.exports = router