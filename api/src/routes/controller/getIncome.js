const { Order, Op } = require("../../db.js");
const { Sequelize} = require("sequelize");

let getIncome = async (req, res) => {

  try {

    let income = await Order.findAll({
      where: {
        amount: {
          [Op.lt]: 1000,
        }
      },
      attributes: [
        [Sequelize.fn('date_trunc', 'day', Sequelize.col('creado')), 'createdOn'],
        [Sequelize.fn('sum', Sequelize.col('amount')), 'suma']
      ],
      order: [[Sequelize.literal('"createdOn"'), 'ASC']],
      group: 'createdOn'
    });

    res.status(200).json(income);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};


let getIncomeToday = async (req, res) => {
  let hoy = new Date()
  let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
  fecha = fecha.split('-').reverse().join('-');

  try {

    let incomeToday = await Order.findAll({
      where: Sequelize.where(Sequelize.fn('date', Sequelize.col('creado')), '=', fecha),
    });

    res.status(200).json(incomeToday);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

module.exports = {
  getIncome,
  getIncomeToday
};
