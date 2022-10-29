const { Router } = require("express");
const router = Router();
const { Game, Genre, Comment, User } = require("../../db");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id.length > 0) {
    try {
      const game = await Game.findByPk(id, {
        include: [
          {
            model: Genre,
          },
          {
            model: Comment,
            include: [
              {
                model: User,
                attributes: ["name", "profilePicture"],
              },
            ],
          },
        ],
      });
      res.status(200).json(game);
    } catch (error) {
      res.status(404).json(error);
    }
  }
});

module.exports = router;
