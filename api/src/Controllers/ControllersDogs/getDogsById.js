require('dotenv').config()
const URL = 'https://api.thedogapi.com/v1/breeds'
const axios = require('axios')

const getDogsById = async (req, res) =>{
    try{
        const { id } = req.params;
        const { data } = await axios(`${URL}/${ id }`)
        res.json( data )
    }
    catch{
        res.status(500).json({error: 'Error al obtener el dog'})
    }
}

module.exports = getDogsById