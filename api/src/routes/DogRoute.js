const { Router } = require('express');
const getAllDog = require('../Controllers/ControllersDogs/getAllDogs')
const getDogsById = require('../Controllers/ControllersDogs/getDogsById');
const getDogsByName = require('../Controllers/ControllersDogs/getDogsByName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
    router.get('/dogs', getAllDog);
router.get('/dogs/name', getDogsByName)
router.get('/dogs/:id', getDogsById)

module.exports = router;
