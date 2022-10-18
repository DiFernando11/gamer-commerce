const { Router } = require('express');
const router = Router();
const { User } = require('../db');

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	if (id.length > 0) {
		try {
			const user = await User.findByPk(id);
			res.status(200).json(user);
		} catch (error) {
			res.status(404).json(error);
		}
	}
});
module.exports = router;