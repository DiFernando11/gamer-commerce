const { Game, User, Comment } = require("../../db");


let getAllComments =async (req, res) => {
    //ejemplo actualziar gtav update/3498?price=50
		
		try {

			let comments= await  Comment.findAll({
                order:
                ['id'],
                include:[{
                  model:Game
                },
                {
                    model:User
                  }
                    
                ]
            })
            
            res.status(200).json(comments);
		} catch (e) {
			res.status(404).json({error: e.message});
		}


}
module.exports = {
    getAllComments
};