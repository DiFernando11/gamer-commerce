const { Game, User, Review } = require("../../db.js");


let updateReview = async (req, res) => {

    const { userid, gameid, rating } = req.body;


    try {

        let [newReview, created] = await Review.findOrCreate({
            where: {
                userId: userid,
                gameId: gameid

            }, defaults: {
                rating: rating
            }

        })
        if (created) {



            let gamefinded = await Game.findOne({ where: gameid, })
            let totalreview = gamefinded.totalreview + 1;
            let totalPoints = gamefinded.points + rating
            await gamefinded.update({ points: totalPoints, totalreview: totalreview })

            res.status(201).json({ msg: "review added" });



        } else if (newReview.rating !== rating) {
            let gamefinded = await Game.findOne({ where: gameid, })

            let totalPoints = gamefinded.points - newReview.rating + rating

            await newReview.update({ rating: rating })
            await gamefinded.update({ points: totalPoints })

            res.status(201).json({ msg: "update review" });

        } else {
            res.status(201).json({ msg: "review already asociated" });

        }



    } catch (e) {
        res.status(404).json({ error: e.message });

    }

}

let getReview = async (req, res) => {
    
    const { userid, gameid } = req.query;

    try {
        let review = await Review.findOne({ where: { userId: userid, gameId: gameid } })
        if (review) {
            res.status(201).json({ review: review });
        } else {
            res.status(201).json({ msg: "review not found" });
        }} catch (e) {
        res.status(404).json({ error: e.message });
        }
}





module.exports = {
    updateReview,
    getReview,
};