const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
//Midlleware que protege ruta, cuando este definido se usara

const { validator } = require('./middleware/validatorMid');

const search = require('./controller/search')
const detail = require('./controller/gameDetail')
const genre = require('./controller/genre')
const filtered = require('./controller/filtered')
const create = require('./controller/createGame')
const checkout = require('./controller/checkout.js');
const { updateGame, updateBanned, hideComment, updateUser } = require('./controller/update')
const { singIn, singUp, googleSign } = require('./controller/auth')
const { createOrder } = require('./controller/createOrder')
const { getAllUsers } = require("../routes/controller/getUsers")
const { getOrders } = require("../routes/controller/getOrders")
const { newComment } = require("../routes/controller/comments")
const { getAllComments } = require("../routes/controller/getComments")
const { purchesesGame } = require("./controller/purchesesGame")
const { addToCart, removeToCart, getCart, mergeCart, cleanCart} = require("./controller/addToCart")
const { addFavs, removeFav, getfavs, mergeFavs, cleanfavs } = require("./controller/addFavs")
const promotions = require('./controller/promotions')
const { getIncome, getIncomeToday } = require('./controller/getIncome')
const { updateReview, getReview } = require('./controller/review')



const user = require('./controller/user');

router.use('/search', search);
router.use('/detail', detail);
router.use('/genre', genre);
router.use('/filtered', filtered);
router.use('/creategame', create);
//se debe indicar por query price, show y discount que actualizar de game
router.put('/update/game/:id', updateGame);
router.put('/update/user/:id', updateBanned);
//update user
router.put('/updateUser/:id', updateUser);
//ruta para registar ususarios o autentificar
router.post('/signin', singIn);
router.post('/signup', singUp);
router.post('/googlesign', googleSign);
//Ruta crea orden
router.get('/orders', getOrders);
router.post('/createorder', createOrder);
//ruta all users
router.get('/allusers', getAllUsers);
router.use('/user', user);
router.use('/promotions', promotions);
//ruta stripe
router.use('/checkout',validator, checkout);

//ruta Comment puede crear, ver todos los comments y borrado logico
router.post('/newcomment',validator, newComment);

router.get('/comments', getAllComments);
//se indica por query propiedad show false o true
router.put('/update/comment/:id', hideComment)

//cantidad de compras por juego
router.get('/purcheses/:id', purchesesGame)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// crud cart
router.get('/getcart', getCart);
router.post('/addtocart', addToCart);
router.delete('/removecart', removeToCart);
router.post('/mergecart', mergeCart);
router.delete('/cleancart', cleanCart);


// crud fav
router.get('/getfavs', getfavs);
router.post('/addfav', addFavs);
router.delete('/removefav', removeFav);
router.post('/mergefavs', mergeFavs);
router.delete('/cleanfavs', cleanfavs);

// ingresos
router.get('/income', getIncome)
router.get('/incomeToday', getIncomeToday)

//Crud Review
router.post('/review', updateReview)
router.get('/review', getReview)

module.exports = router;
