const { Router } = require('express');
const router = Router();
const { User } = require('../db');

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json(error);
    }
    
})

module.exports = router;