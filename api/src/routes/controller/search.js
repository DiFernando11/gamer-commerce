const { Router } = require('express');
const router = Router();
const { Game, Op, Genre } = require('../../db');


router.get('/', async(req, res) => {
    const {name} = req.query;
    try {
        const game = await Game.findAll({
            where:{
                name: {
                    [Op.iLike]: `${name}%`
                  }
            },
            include: Genre
        });
        res.json(game);
        
    } catch (error) {
        res.status(404).json(error);
    }
})

module.exports = router;