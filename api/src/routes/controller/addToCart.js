const { Game, User, Cartfav} = require("../../db");

let addToCart = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid, gameid } = req.body;

    if ((userid) && (gameid)) {
        try {
            const user = await User.findOne({
                where: {
                    id: userid,
                },
            });
            console.log(user.name)
            const game = await Game.findOne({
                where: {
                    id: gameid,
                },
            });
            console.log(game.name)

            await user.addGame(game,{ through: { cart: true } })

            res.status(201).json({ msg: "done" });

        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }
    else {
        res.status(404).json({ error: "You must send req.body userid and gameid" });

    }

};


let removeToCart = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid, gameid } = req.body;

    if ((userid) && (gameid)) {
        try {
            const finded = await Cartfav.findOne({
                where: {
                    gameId: gameid,
                    userId: userid,
                    cart: true,
                    
                },
            });
        

            await finded.destroy()

            res.status(201).json({ msg: "done" });

        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }
    else {
        res.status(404).json({ error: "You must send req.body userid and gameid" });

    }

};
let getCart = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid } = req.body;

    if (userid) {
        try {
            const finded = await Cartfav.findAll({
                include:{
                    model: Game,
                  }, 
                where: {
                    userId: userid,
                    cart:true
                }
               
            });
         

            res.status(201).json(finded);

        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }
    else {
        res.status(404).json({ error: "You must send req.body userid and gameid" });

    }

};


module.exports = {
    addToCart,
    removeToCart,
    getCart

};