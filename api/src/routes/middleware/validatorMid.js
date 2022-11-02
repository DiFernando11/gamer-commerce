const { User } = require("../../db.js");
const jwt = require("jsonwebtoken");
const { encryptKey, } = process.env;


let validator = (req, res, next) => {

    // Comprobar que existe el token
    if (!req.headers.authorization) {
        res.status(401).json({ denied: "Acceso no autorizado" });
    } else {

        // Comrpobar la validez de este token
       // let token = req.headers.authorization;
        let token = req.headers.authorization.split(" ")[1];


        // Comprobar la validez de este token
        jwt.verify(token, encryptKey, (err, decoded) => {


            if (err) {
                res.status(500).json({ denied: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                User.findByPk(decoded.user.id).then(user => {

                    //console.log(user.roles);

                    req.user = user;
                    next();
                });
            }

        })
    }

};


module.exports = {
    validator
}