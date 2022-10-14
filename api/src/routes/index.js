const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const search = require('./search')
const detail = require('./gameDetail')
const genre = require('./genre')
const filtered = require('./filtered')


router.use('/search', search);
router.use('/detail', detail);
router.use('/genre', genre);
router.use('/filtered', filtered)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;


