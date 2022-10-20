const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
//Midlleware que protege ruta, cuando este definido se usara
const { validator } = require("./middleware/validatorMid")

const search = require('./search')
const detail = require('./gameDetail')
const genre = require('./genre')
const filtered = require('./filtered')
const create = require('./createGame')
const { updateGame, updateBanned } = require('./update')
const { singIn, singUp } = require('./auth')
const { createOrder } = require('./createOrder')
const { getAllUsers } = require("../routes/getUsers")
const { getOrders } = require("../routes/getOrders")
const checkout = require('./checkout.js');
const summary = require('./summary.js');

const user = require('./user')

router.use('/search', search);
router.use('/detail', detail);
router.use('/genre', genre);
router.use('/filtered', filtered)
router.use('/creategame', create)
//se debe indicar por query que actualizar de game
router.put('/update/game/:id', updateGame)
router.put('/update/user/:id', updateBanned)
//ruta para registar ususarios o autentificar
router.post('/signin', singIn);
router.post('/signup', singUp);
//Ruta crea orden
router.get('/orders', getOrders);
router.post('/createorder', createOrder);
//ruta all users
router.get('/allusers', getAllUsers);
router.use('/user', user);
//ruta stripe
router.use('/checkout', checkout);
router.use('/summary', summary);





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;


