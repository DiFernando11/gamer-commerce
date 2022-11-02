const { Game, User, Cartfav} = require("../../db");

let addFavs = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid, gameid } = req.body;

    if ((userid) && (gameid)) {
        try {
          
            const [favItem, created] = await Cartfav.findOrCreate({
                where: {
                    userId: userid,
                    gameId: gameid,
                    cart: false

                }

            })
            if (created) {
                res.status(201).json({ msg: "New game Added to Fav" });
            } else {
                res.status(201).json({ msg: " already in Favs" });
            }


        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }
    else {
        res.status(404).json({ error: "You must send req.body userid and gameid" });

    }

};
let removeFav = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid, gameid } = req.body;

    if ((userid) && (gameid)) {
        try {
            const finded = await Cartfav.findOne({
                where: {
                    gameId: gameid,
                    userId: userid,
                    cart: false,
                    
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

let getfavs = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid } = req.query;

    if (userid) {
        try {
            const finded = await Cartfav.findAll({
                include:{
                    model: Game,
                  }, 
                where: {
                    userId: userid,
                    cart:false
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

let mergeFavs = async (req, res) => {
    //mandar prop body, userid y gameid
    const { userid, gameidArray } = req.body;

    if ((userid) && (gameidArray)) {
        try {

            for (let i = 0; i < gameidArray.length; i++) {
                
                await Cartfav.findOrCreate({
                    where: {
                        userId: userid,
                        gameId: gameidArray[i],
                        cart: false

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

let cleanfavs = async (req, res) => {
    //mandar prop body comment, userid y gameid
    const { userid } = req.query;

    if (userid) {
        try {
            await Cartfav.destroy({
                where: {
                    userId: userid,
                    cart:false
                }
               
            });

             
            res.status(201).json({ msg: "favs cleaned" });
        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }
    else {
        res.status(404).json({ error: "You must send req.body userid and gameid" });

    }

};

module.exports = {
    addFavs,
    removeFav,
    getfavs,
    mergeFavs,
    cleanfavs

};