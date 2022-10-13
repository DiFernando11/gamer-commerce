const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const search = require('./search')
router.use('/search', search);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;


