const express = require('express')
const router = express.Router()
const { Game } = require('../db')
const { Sequelize, Op } = require('sequelize');


// ---------------------------------------------------- GET -----------------------------------------------------
const getTop12 = async () => {
    try {
        const dbInfo = await Game.findAll({
            // limit: 12,
            // order: [['rating','DESC']]
            limit: 10,
            order: [ [ Sequelize.fn('RANDOM') ] ]
        })


        if (dbInfo.length > 0) {
            return dbInfo
        }

        return ([])

    } catch (error) {
        console.error('INFO API', error);
        return ([])
    }
}

router.get('/', async (req, res) => {
    try {
        const info = await getTop12()
        res.status(200).json(info);
    } catch (error) {
        console.error(error)
        return ([])
    }
})

module.exports = router