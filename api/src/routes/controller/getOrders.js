const { Game, User, Order, Op } = require("../../db.js");

let getOrders = async (req, res) => {
  //ejemplo actualziar gtav update/3498?price=50

  try {
    let user = await Order.findAll({
      where: {
        amount: {
          [Op.lt]: 1000,
        }
      },
      order: ["id"],
      include: [
        {
          model: Game,
        },
        {
          model: User,
        },
      ],
    });
    res.status(200).json(user);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
module.exports = {
  getOrders,
};
