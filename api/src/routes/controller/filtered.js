const express = require("express");
const router = express.Router();
const { Game, Genre, Order, Op } = require("../../db");
const { Sequelize } = require("sequelize");
const db = require("../../db");

// ---------------------------------------------------- GET -----------------------------------------------------
const getFilter = async (type) => {
  try {
    let dbInfo = "";
    let resto = ''
    if (type === "all") {
      dbInfo = await Game.findAll({
        include: [{ model: Genre }, { model: Order }]
      });
    }

    if (type === "top12") {
      dbInfo = await Game.findAll({
        where: { show: true },
        limit: 12,
        order: [["rating", "DESC"]],
      });
    }

    if (type === "topPrice") {
      dbInfo = await Game.findAll({
        where: { show: true },
        limit: 12,
        order: [["price", "DESC"]],
        include: Genre,
      });
    }

    if (type === "random") {
      dbInfo = await Game.findAll({
        where: { [Op.and]:[ {show: true}, {with_discount: true}]},
        limit: 10,
        order: [[Sequelize.fn("RANDOM")]],
      });
      if(dbInfo.length < 10){
        resto = await Game.findAll({
          where:{
            show: true
          },
          limit: (10 - dbInfo.length),
          order: [[Sequelize.fn("RANDOM")]]
        })
      }
    }

    if (dbInfo.length > 0) {
      return [...dbInfo, ...resto];
    }

    return [];
  } catch (error) {
    console.error("INFO API", error);
    return [];
  }
};

router.get("/", async (req, res) => {
  const { type } = req.query;
  try {
    const info = await getFilter(type);
    res.status(200).json(info);
  } catch (error) {
    console.error(error);
    return [];
  }
});

module.exports = router;
