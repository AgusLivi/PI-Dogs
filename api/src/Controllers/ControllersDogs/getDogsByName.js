const URL = 'https://api.thedogapi.com/v1/breeds/search'
const axios = require('axios')
const {Dog, Temperaments} = require('../../db')
require('dotenv').config()
const { Op } = require('sequelize');
 const {API_KEY}=process.env
console.log('name')
const getDogsByName = async (req, res) => { //funcion asincrona, toma dos arg, req(solicitud http) res(respuesta http)
try{
const{ name } = req.query
const apiRes = await axios(`${URL}?q=${name}&api_key=${API_KEY}`)
const apiDogs = apiRes.data   

//consulta a la base de datos
const dbDogs = await Dog.findAll({
    where: {
        name: {
            [Op.iLike]: `%${name}%`,
        },
    },
    include: [Temperaments]
})
 // Combinar resultados de la API y la base de datos
const allDogs = [...apiDogs, ...dbDogs];
if (allDogs.length === 0) {
    return res.status(404).json({ message: 'No se encontraron razas de perros con ese nombre.' });
  }
  console.log("se mostro el perro buscado por nombre")
res.json(allDogs)

}
catch(error){
console.error(error);
res.status(500).json({error: 'Error al obtener las razas de perros.'})
}
}   

module.exports= getDogsByName