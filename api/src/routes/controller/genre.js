const express = require('express');
const router = express.Router();
const { Game, Genre, Op } = require('../../db');
const { topTen } = require('../helper/top10');
// ---------------------------------------------------- GET -----------------------------------------------------
const getGenre = async () => {
	try {
		const dbInfo = await Genre.findAll();

		if (dbInfo.length > 0) {
			let response = await dbInfo?.map((result) => {
				return {
					id: result.id,
					name: result.name,
					image: result.image,
				};
			});

			return response;
		}

		return [];
	} catch (error) {
		console.error('INFO API', error);
		return [];
	}
};

router.get('/', async (req, res) => {
	try {
		const info = await getGenre();
		res.status(200).json(info);
	} catch (error) {
		console.error(error);
		return [];
	}
});

// ---------------------------------------------------- GET -----------------------------------------------------

const getGame = async (genre) => {
	try {
		const dbInfo = await Game.findAll({
			include: [
				{
					model: Genre,
					through: { attributes: [] },
					where: {
						name: {
							[Op.iLike]: `${genre}%`,
						},
					},
				},
			],
		});

		if (dbInfo.length > 0) {
			return dbInfo;
		}

		return [];
	} catch (error) {
		console.error(error);
		return [];
	}
};

router.get('/:name', async (req, res) => {
	const { type } = req.query;
	const { name } = req.params;
	try {
		const info = await getGame(name);
		if (type === 'top') {
			const top = topTen(info);
			return res.status(200).json(top);
		} else {
			res.status(200).json(info);
		}
	} catch (error) {
		console.error(error);
		return [];
	}
});

module.exports = router;
