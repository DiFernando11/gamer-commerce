const { Game, User } = require("../db.js");


 let updateGame =async (req, res) => {
    //ejemplo actualziar gtav update/3498?price=50
	const { id } = req.params;
    const arrKey = Object.keys(req.query);
	if(arrKey[0]==="price"|| arrKey[0]==="show"){
		try {
			await  Game.update({[arrKey[0]]:req.query[arrKey[0]]},{where:{id:id}})
			res.status(201).json({msg:`Game ${arrKey[0]} Updated` });
		} catch (e) {
			res.status(404).json({error: e.message});
		}
	}
	else{
		res.status(404).json({error: "Solo puede modificar query price o show"});

	}
	
};
let updateBanned =async (req, res) => {
    //ejemplo actualziar gtav update/3498?price=50
	const { id } = req.params;
    const { banned } = req.query;
	if(banned){

		try {

			let user= await  User.update({isBanned:banned},{where:{id:id}})
			res.status(201).json({msg:`user update`});
		} catch (e) {
			res.status(404).json({error: e.message});
		}

	}else{
		res.status(404).json({error: "Solo puede modificar query banned"});

	}
	
};

module.exports = {
    updateGame,
	updateBanned
};