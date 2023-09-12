
const URL = 'https://api.thedogapi.com/v1/breeds'
const axios = require('axios')
require('dotenv').config()
const {API_KEY}=process.env
const { Dog, Temperaments } = require ('../../db')



const getAllDogs = async (req, res) => {
  try {
    // Obtener datos de la API externa
    const { data: apiData } = await axios.get(`${URL}/?api_key=${API_KEY}`);
    const getDbData = async () => {
      const data = await Dog.findAll({
    
        include: Temperaments,
      });
      console.log(data)
    
      return data;
    };  

    // Obtener datos de la base de datos local
    const dbData = await getDbData();

    // Combinar los datos de la API y la base de datos
    
    const combinedData = [...apiData, ...dbData]

    
    res.json(combinedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los perros' });
  }
};



module.exports = getAllDogs;



// const URL = 'https://api.thedogapi.com/v1/breeds/?api_key=live_XMLfXFNj3FZP06BgfY6Mfr3a41vw825LIO5tYLVcTglgPYhkexln6aMsXYstrX4U'
// const axios = require('axios')
// require('dotenv').config()
// const {API_KEY}=process.env
// const { Dog, Temperaments } = require ('../../db')

// const getAllDogs = async (req, res) => {
//     try{
//       const getDbData = async () => {
//         const data = await Dog.findAll({
//             include: 
//                 Temperaments
//         });
    
//         return data;
//     }
//   const {data} = await axios.get(URL)

//   res.json(data)
//     } catch{
//         res.send(500).json({error: 'No se enviaron todos los perros'})
//     }
// }
// module.exports = getAllDogs


// const getDbData = async () => {
//     const data = await Dog.findAll({
//         include: 
//             Temperaments
//     });

//     return data;
// }