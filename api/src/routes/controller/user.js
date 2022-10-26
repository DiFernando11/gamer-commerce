const { Router } = require("express");
const router = Router();
const { User, Order, Game, Cartfav} = require("../../db");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id.length > 0) {
    try {
      const user = await User.findByPk(id, {
        include: [
          {
            model: Order,
            include: [
              {
                model: Game,
              },
            ],
          },
        ],
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  }
});

router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { atribbute, data } = req.query;
  if (!id || !atribbute) throw "Faltan parametros";
  let updateUser = await User.findByPk(id);
  if (!updateUser) throw "Missing parameters";
  const userupdated = await updateUser.update({
    [atribbute]: data,
  });
  try {
    res.json("has been successfully updated");
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;
