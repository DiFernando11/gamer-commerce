const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
//Midlleware que protege ruta, cuando este definido se usara

const { validator } = require('./middleware/validatorMid');

const search = require('./search')
const detail = require('./gameDetail')
const genre = require('./genre')
const filtered = require('./filtered')
const create = require('./createGame')
const checkout = require('./checkout.js');
const {updateGame, updateBanned, hideComment} = require('./update')
const {singIn,singUp, googleSign} = require('./auth')
const {createOrder} = require('./createOrder')
const {getAllUsers}= require("../routes/getUsers")
const {getOrders}= require("../routes/getOrders")
const {newComment}= require("../routes/controller/comments")
const {getAllComments}= require("../routes/controller/getComments")
const {purchesesGame} = require("../routes/purchesesGame")

const user = require('./user');

router.use('/search', search);
router.use('/detail', detail);
router.use('/genre', genre);
router.use('/filtered', filtered);
router.use('/creategame', create);
//se debe indicar por query que actualizar de game
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

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
