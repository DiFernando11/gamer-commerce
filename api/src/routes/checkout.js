const express = require('express')
const router = express.Router()
const Stripe = require("stripe");
const stripe = new Stripe(process.env.KEY);
const cors = require('cors')

router.use(cors({ origin: "http://localhost:3000" }));

router.post("/", async (req, res) => {

    const { id, userId, amount } = req.body

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Jars",
            payment_method: id,
            confirm: true, //confirm the payment at the same time
        });

    } catch (error) {
        console.log(error);
        return res.json({ message: error.raw.message });
    }
});

module.exports = router