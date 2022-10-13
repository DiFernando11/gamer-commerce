const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const search = require('./search')
const detail = require('./gameDetail')
router.use('/search', search);
router.use('/detail', detail);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;


