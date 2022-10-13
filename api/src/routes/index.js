const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const search = require('./search')
const genre = require('./genre')

router.use('/search', search);
router.use('/genre', genre);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;


