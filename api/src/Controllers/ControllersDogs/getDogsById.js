require('dotenv').config()
const URL = 'https://api.thedogapi.com/v1/breeds/'
const axios = require('axios')
const {API_KEY} = process.env
const { Dog, Temperaments } =require('../../db')

const getDogsById = async (req, res) =>{
    try {
        const { id } = req.params;
       

        // Verificar si el ID es un número entero
        if (!isNaN(id)) {
            // Si es un número entero, buscar en la API
            const { data } = await axios.get(`${URL}${id}?api_key=${API_KEY}`);
            res.json(data);
        } else {
            // Si no es un número entero, buscar en la base de datos local por UUID
            const localDog = await Dog.findByPk(id, {
                include: [Temperaments],
            });

            if (localDog) {
                const modifiedData = {
                    image: localDog.image,
                    name: localDog.name,
                    weight_min: localDog.weight_min,
                    weight_max: localDog.weight_max,
                    life_span: localDog.life_span,
                    height_min: localDog.height_min,
                    height_max: localDog.height_max,
                    creator: localDog.creator,
                    Temperaments: localDog.Temperaments.map(temp => temp.name)
        
                };
               
                res.json(modifiedData);
                
            } else {
                res.status(404).json({ error: 'Perro no encontrado en la base de datos local' });
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = getDogsById