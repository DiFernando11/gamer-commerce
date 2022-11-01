const { Router } = require('express');
const router = Router();
const { Game, User } = require('../../db');
const emailer1 = require('../../emailer1')

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
            attributes: ['id','name', 'image', 'price', 'discount']
        })


        //emailer1.sendMail(users, games)

        //const info = (users, games)
        
        
        //emailer1.sendMail([users.email, users.name],games)

         for (let i = 0; i < users.length; i++) {
          emailer1.sendMail(users[i].email, users[i].name ,games)           
         }
        // emailer1.sendMail('facundo.eet2@gmail.com', 'facundo', games.sort((a, b) => (b.price - b.discount) - (a.price - a.discount)))
       // emailer1.sendMail( games )

        res.status(200).json(games)
        //res.status(200).json(userBD)
        
    } catch (error) {
        console.log(error)
        res.status(400).json('error')
    }
})


    module.exports = router;

