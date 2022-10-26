const { Game, User, Order } = require("../../db.js");


let getAllUsers =async (req, res) => {
    //ejemplo actualziar gtav update/3498?price=50
		
		try {

			let user= await  User.findAll({
                order:
                ['email'],
                include:[{
                    model: Order,
                    include:[{
                        model:Game
                      }]
                    
                }
                    
                ]
            })
            res.status(200).json(user);
		} catch (e) {
			res.status(404).json({error: e.message});
		}


}
module.exports = {
    getAllUsers
};