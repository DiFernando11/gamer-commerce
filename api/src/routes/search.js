const { Router } = require('express');
const router = Router();
const { Game, Op } = require('../db');


router.get('/', async(req, res) => {
    const {name} = req.query;
    const game = await Game.findAll({
        where:{
            name: {
                [Op.iLike]: `${name}%`
              }
        }
    });
    res.json(game);
})

module.exports = router;