const { Router } = require('express');
const router = Router();
const { Game, User } = require('../../db');
const emailer1 = require('../../emailer')

// get a promotions/
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            where:{
                promotion: true
            },
            attributes: ['email', 'name'],
        })
        const games = await Game.findAll({
            where:{
                with_discount: true
            },
            attributes: ['name', 'image', 'price', 'discount']
        })
        // for (let i = 0; i < users.length; i++) {
         //    emailer1.sendMail(users[i].email, users[i].name ,games)            
        // }
        res.status(200).json({ msg: 'email send'})
    } catch (error) {
        console.log(error)
        res.status(400).json('error')
    }
})

module.exports = router;
