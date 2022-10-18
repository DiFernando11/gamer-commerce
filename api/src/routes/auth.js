const { User } = require("../db.js");
const bcrypt= require ("bcrypt");
const jwt= require("jsonwebtoken");
const {toCapitalize} = require("../utils/utils");

const {
   encryptKey, 
   encryptRounds,
   encryptExpiration
  } = process.env;

let singIn=(req,res)=>{
    let { email, password } = req.body;
    let emailLower= email.toLowerCase()

    // Buscar usuario
    User.findOne({
        where: {
            email: emailLower
        }
    }).then(user => {

        if (!user) {
            res.status(404).json({ msg: "Usuario con este correo no encontrado" });
        } else {

            if (bcrypt.compareSync(password, user.password)) {

                // Creamos el token
                let token = jwt.sign({ user: user }, encryptKey, {
                    expiresIn: encryptExpiration
                });

                res.json({
                    user: user,
                    token: token
                })

            } else {

                // Unauthorized Access
                res.status(401).json({ msg: "Contraseña incorrecta" })
            }

        }

    }).catch(err => {
        res.status(500).json(err);
    })
}

let singUp=(req,res)=>{
          // Encriptamos la contraseña
          let passwordEncrypt = bcrypt.hashSync(req.body.password, Number.parseInt(encryptRounds));
          console.log(password)
        let nameCapitalized= toCapitalize(req.body.name)
        let lastNameCapitalized= toCapitalize(req.body.lastname)
        let emailLower= req.body.email.toLowerCase()


          // Crear un usuario
          User.create({
            
              name: nameCapitalized,
              lastname: lastNameCapitalized,
              email: emailLower,
              password: passwordEncrypt
          }).then(user => {
  
              // Creamos el token
              let token = jwt.sign({ user: user }, encryptKey, {
                  expiresIn: encryptExpiration
              });
  
              res.json({
                  user: user,
                  token: token
              });
  
          }).catch(err => {
              res.status(500).json(err);
          });
  
}


module.exports={
    singIn,
    singUp
}