const URL = 'https://api.thedogapi.com/v1/breeds/search'
const axios = require('axios')
require('dotenv').config()
// const {API_KEY}=process.env //despues la uso
console.log('hola')
const getDogsByName = async (req, res) => { //funcion asincrona, toma dos arg, req(solicitud http) res(respuesta http)
try{
const{ name } = req.query
const apiRes = await axios(`${URL}?q=${name}`)
const apiDogs = apiRes.data   

//consulta a la base de datos
const dbDogs = await Dog.findAll({
    where: {
        name: {
            [Op.iLike]: `%${name}%`,
        },
    },
    include: [Temperament]
})
res.json(data)
console.log("hola")
}
catch(error){
console.error(error);
res.status(500).json({error: 'Error al obtener las razas de perros.'})
}
}   

module.exports= getDogsByName