const { User } = require("../../db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { toCapitalize } = require("../../utils/utils");
const { getAge } = require('../helper/getAge');

const {
    encryptKey,
    encryptRounds,
    encryptExpiration
} = process.env;

let singIn = (req, res) => {
    let { email, password } = req.body;
    let emailLower = email.toLowerCase()

    // Buscar usuario
    User.findOne({
        where: {
            email: emailLower
        }
    }).then(user => {

        if(!user.isBanned){

            if (!user) {
                res.status(200).json({ msg: "User not found" });
            } else {
                // Verificar contraseña
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
                    res.status(200).json({ msg: "Password incorrect" })
                }
        }
        } else {
            res.status(200).json({ msg: "This user is banned" })
        }

    }).catch(err => {
        res.status(500).json(err);
    })
}

let singUp = (req, res) => {
    // Encriptamos la contraseña
    const { name, lastname, email, password, birthday, country } = req.body;

    let passwordEncrypt = bcrypt.hashSync(password, Number.parseInt(encryptRounds));
    let nameCapitalized = toCapitalize(name)
    let lastNameCapitalized = toCapitalize(lastname)
    let emailLower = email.toLowerCase()
    const age = getAge(birthday)

    // Crear un usuario
    User.create({

        name: nameCapitalized,
        lastname: lastNameCapitalized,
        email: emailLower,
        password: passwordEncrypt,
        birthday: birthday,
        country,
        age
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


let googleSign = async (req, res) => {
    // Encriptamos la contraseña
    const { name, lastname, email, password, google, profilePicture } = req.body;
    let nameCapitalized = toCapitalize(name)
    let lastNameCapitalized = toCapitalize(lastname)
    let emailLower = email.toLowerCase()
    let userFinder = await User.findOne({ where: { email: emailLower } })
    let passwordEncrypt = bcrypt.hashSync(password, Number.parseInt(encryptRounds));


    if (!userFinder && email && name && lastname && google) {

        let passwordEncrypt = bcrypt.hashSync(password, Number.parseInt(encryptRounds));
        User.create({
            email: emailLower,
            name: nameCapitalized,
            lastname: lastNameCapitalized,
            password: passwordEncrypt,
            profilePicture,
            google: true
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
        })

    } else if (userFinder && email && name && lastname && google) {
        if(userFinder.isBanned){
            res.status(200).json({ msg: "This user is banned" })       
        }else{
            
            let token = jwt.sign({ user: userFinder }, encryptKey, {
                expiresIn: encryptExpiration
            });
    
            res.json({
                user: userFinder,
                token: token
            });
        }
    }

}


module.exports = {
    singIn,
    singUp,
    googleSign
}