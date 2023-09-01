const {Dog, Temp} = require('../../db')
const express = require('express')
const app = express();

// Middleware para parsear JSON en las solicitudes
app.use(express.json());


app.get('/dogs', async (req, res)=>{
    try{
        const dogs = await Dog.findAll();
        res.json(dogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error al obtener las razas de perros"})
    }
})