const { Game, User, Cartfav } = require("../../db");

let addToCart = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid, gameid } = req.body;

    if ((userid) && (gameid)) {
        try {


            const [cartItem, created] = await Cartfav.findOrCreate({
                where: {
                    userId: userid,
                    gameId: gameid,
                    cart: true

                }

            })
            if (created) {
                res.status(201).json({ msg: "New game Added to Cart" });
            } else {
                res.status(201).json({ msg: " already in cart" });
            }


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
    const { userid } = req.query;

    if (userid) {
        try {
            const finded = await Cartfav.findAll({
                include: {
                    model: Game,
                },
                where: {
                    userId: userid,
                    cart: true
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
let mergeCart = async (req, res) => {
    //mandar prop body, userid y gameid
    const { userid, gameidArray } = req.body;

    if ((userid) && (gameidArray)) {
        try {

            for (let i = 0; i < gameidArray.length; i++) {
                
                await Cartfav.findOrCreate({
                    where: {
                        userId: userid,
                        gameId: gameidArray[i],
                        cart: true

                    }   

                })

            }
            
            
   
            try {
                const finded = await Cartfav.findAll({
                    include: {
                        model: Game,
                    },
                    where: {
                        userId: userid,
                        cart: true
                    }
        
                });
                   
        
                        res.status(201).json(finded); 
            } catch (error) {
                res.status(404).json({ error: e.message });
            }

       

    
            


        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }
    else {
        res.status(404).json({ error: "You must send req.body userid and gameid" });

    }

};
let cleanCart = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid } = req.query;

    if (userid) {
        try {
            await Cartfav.destroy({
                where: {
                    userId: userid,
                    cart:true
                }
               
            });

             
            res.status(201).json({ msg: "Cart cleaned" });
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
    getCart,
    mergeCart,
    cleanCart

};