require('dotenv').config()
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds/`;

const getTemperaments = async (req, res) => {
  try {
    const { data } = await axios(`${URL}?api_key=${API_KEY}`);
    const temperaments = new Set();

    data.forEach((dog) => {
      if (dog.temperament) {
        const dogTemp = dog.temperament
          ?.split(",")
          .map((temperament) => temperament.trim());
        dogTemp.forEach((temp) => {
          temperaments.add(temp);
        });
      }
    });

    const temperamentsArray = Array.from(temperaments);
    res.status(200).json(temperamentsArray);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getTemperaments;





// require('dotenv').config()
// const { Temperaments } = require("../../db");
// const axios = require("axios");
// const { API_KEY } = process.env;
// const URL = `https://api.thedogapi.com/v1/breeds/`;



// const findOrCreateTemperament = async (temperament) => {
//   await Temperaments.findOrCreate({ where: { name: temperament } });
// };



// const getTemperaments = async (req, res) => {
//     try {
//       const { data } = await axios(`${URL}?api_key=${API_KEY}`);
//       let temperaments = [];
//       data.forEach((dog) => {
//         if (dog.temperament) {
//           const dogTemp = dog.temperament
//             ?.split(",")
//             .map((temperament) => temperament.trim());
//           temperaments.push(...dogTemp);
//         }
//       });
//       const temperamentSet = new Set(temperaments);
//       const temperamentsArray = Array.from(temperamentSet);
//       temperamentsArray.forEach(async (temperament) => {
//         await findOrCreateTemperament(temperament);
//       });
//       res.status(200).json(temperamentsArray);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };
  
//   module.exports = getTemperaments;



// const URL = 'https://api.thedogapi.com/v1/breeds/'
// const axios = require('axios')
// require('dotenv').config()
// const { API_KEY } = process.env;
// const { Dog, Temperament } = require('../../db');
// console.log('llega al temperamentos')
// const getDogsByTemperament = async (req, res) => {
//     console.log('entra al tempsc');
//     try{
//         const {temperament} = req.params;

//         const dogsInDb= await Dog.findAll({
//             include: [Temperament],
//             where: {
//                 '$Temperaments.name$': temperament,
//             },
//         })
//         const {data: dogsInApi} = await axios.get(`${URL}?api_key=${API_KEY}`);
//         const matchingDogsInApi = dogsInApi.filter(dog=>{
//             return (dog.temperament && 
//                 dog.temperament.toLowerCase().includes(temperament.toLowerCase())
//                 )
//         })

//         const combined = [...dogsInDb, ...matchingDogsInApi];

//         res.json(combined)

//     }catch(error){
//         res.status(500).json({error: 'Error al obtener los perros por temperamento'})

//     }
// }
// module.exports = getDogsByTemperament