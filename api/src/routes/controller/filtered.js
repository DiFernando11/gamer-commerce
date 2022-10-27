const express = require("express");
const router = express.Router();
const { Game, Genre, Order } = require("../../db");
const { Sequelize } = require("sequelize");

// ---------------------------------------------------- GET -----------------------------------------------------
const getFilter = async (type) => {
  try {
    let dbInfo = "";

    if (type === "all") {
      dbInfo = await Game.findAll({
        include: Genre,
        include: Order,
      });
    }

    if (type === "top12") {
      dbInfo = await Game.findAll({
        limit: 12,
        order: [["rating", "DESC"]],
      });
    }
    if (type === "topPrice") {
      dbInfo = await Game.findAll({
        limit: 12,
        order: [["price", "DESC"]],
        include: Genre,
      });
    }
    if (type === "random") {
      dbInfo = await Game.findAll({
        limit: 10,
        order: [[Sequelize.fn("RANDOM")]],
      });
    }

    if (dbInfo.length > 0) {
      return dbInfo;
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
