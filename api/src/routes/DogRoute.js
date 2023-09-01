const { Router } = require('express');
const getAllDog = require('../Controllers/ControllersDogs/getAllDogs')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getAllDog);


module.exports = router;
