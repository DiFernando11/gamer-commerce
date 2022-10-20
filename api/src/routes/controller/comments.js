const { Game, User, Comment } = require("../../db");


let newComment = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { comment, userid, gameid } = req.body;

    if ((comment) && (userid) && (gameid)) {
        try {
            const nComment = await Comment.create({

                comment: comment

            });

            const user = await User.findOne({
                where: {
                    id: userid,
                },
            });
            console.log(user.name)
            await user?.addComment(nComment);

            const game = await Game.findOne({
                where: {
                    id: gameid,
                },
            });
            console.log(game.name)

            await game?.addComment(nComment);

            res.status(201).json({ msg: `Comment posted` });





        } catch (e) {
            res.status(404).json({ msg: e.message });
        }
    }
    else {
        res.status(404).json({ error: "You must send req.body comment, userid and gameid" });

    }

};


module.exports = {
    newComment

};