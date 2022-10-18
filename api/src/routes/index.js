const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const search = require('./search')
const detail = require('./gameDetail')
const genre = require('./genre')
const filtered = require('./filtered')
const create = require('./createGame')
const {singIn,singUp} = require('./auth')
const userId = require('./userDetail')

router.use('/search', search);
router.use('/detail', detail);
router.use('/genre', genre);
router.use('/filtered', filtered)
router.use('/creategame', create)
router.post('/signin', singIn);
router.post('/signup', singUp);
router.use('/user', userId);



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;


