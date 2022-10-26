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
const {updateGame, updateBanned, hideComment} = require('./controller/update')
const {singIn,singUp, googleSign} = require('./controller/auth')
const {createOrder} = require('./controller/createOrder')
const {getAllUsers}= require("../routes/controller/getUsers")
const {getOrders}= require("../routes/controller/getOrders")
const {newComment}= require("../routes/controller/comments")
const {getAllComments}= require("../routes/controller/getComments")
const {purchesesGame} = require("./controller/purchesesGame")
const {addToCart, removeToCart,getCart} = require("./controller/addToCart")
const {addFavs, removeFav, getfavs} = require("./controller/addFavs")



const user = require('./controller/user');

router.use('/search', search);
router.use('/detail', detail);
router.use('/genre', genre);
router.use('/filtered', filtered);
router.use('/creategame', create);
//se debe indicar por query price, show y discount que actualizar de game
router.put('/update/game/:id', updateGame);
router.put('/update/user/:id', updateBanned);
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

//ruta stripe
router.use('/checkout', checkout);

//ruta Comment puede crear, ver todos los comments y borrado logico
router.post('/newcomment',newComment );
router.get('/comments', getAllComments);
//se indica por query propiedad show false o true
router.put('/update/comment/:id',hideComment )

//cantidad de compras por juego
router.get('/purcheses/:id', purchesesGame )

//cart CRUD
router.post('/addtocart', addToCart);
router.delete('/removetocart', removeToCart);
router.get('/getcart', getCart);


//Fav Crud
router.get('/getfavs', getfavs);
router.post('/addtofavs', addFavs);
router.delete('/removefav', removeFav);


//add to cart


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
