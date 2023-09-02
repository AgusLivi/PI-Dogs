require('dotenv').config()
const URL = 'https://api.thedogapi.com/v1/breeds/'
const axios = require('axios')
const {API_KEY}=process.env
const { Dog, Temperament } =require('../../db')
console.log('id')
const getDogsById = async (req, res) =>{
    console.log('id2')
    try{
        const { id } = req.params;
         // Buscar en la base de datos local
         const localDog = await Dog.findByPk(id, {
            include: [Temperament ],
         });
         if (localDog) {
            // Si se encuentra en la base de datos local, retornar ese resultado
            res.json(localDog);
        }else {
            const { data } = await axios(`${URL}${id}?api_key=${API_KEY}`)
            console.log('se mostro el id')
            res.json( data )
        }
        
    }
    catch{
        res.status(500).json({error: 'Error al obtener el dog'})
    }
}

module.exports = getDogsById