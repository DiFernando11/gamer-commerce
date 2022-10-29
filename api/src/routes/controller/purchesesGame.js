const { Game, User, Order } = require("../../db.js");


let purchesesGame = async (req, res) => {

  const { id } = req.params

  try {

    let purcheses = await Game.findOne({
      where: { id },
      include: [{
        model: Order,
        include: [{
          model: User
        }
        ]
      }
      ]
    })

    res.status(200).json(purcheses);
  } catch (e) {
    //console.log(e)
    res.status(404).json({ error: e.message });
  }
}

module.exports = {
  purchesesGame
};