const { Router } = require('express');
const router = Router();
const { Game, Op, Genre } = require('../db');
const { validatePost } = require('./validator/createGame');
const {createId } = require('./helper/createId')
router.get('/id', validatePost ,async (req,res) =>{
    const id = await createId()
    res.json(id);
})
router.post('/', validatePost, async (req, res) => {
	const {
		name,
		released,
		description,
		image,
		image2,
		developers,
		requirements_min,
		requirements_rec,
        website,
        price,
		rating,
		genres,
	} = req.body;
    
	try {
		const id = await createId()
		let newGame = await Game.create({
			id,
			name,
			released,
			description,
			image,
			image2,
			developers,
			requirements_min,
			requirements_rec,
			website,
			rating,
			price,
			genres,
        });
		genres.forEach(async (el) => {
			let genreDb = await Genre.findAll({
				where: { name: el },
			});
			await newGame.addGenre(genreDb);
		});
		return res.status(200).send('juego creado');
	} catch (error) {
		console.log(error);
	}
	res.send('llegue al send');
});

module.exports = router;
