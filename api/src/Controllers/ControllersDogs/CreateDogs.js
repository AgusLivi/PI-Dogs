// const { Dog, Temperaments } = require("../../db");

// const createDog = async (newDog, tempsArray) => {
//   const foundTemps = [];

//   // tempsArray is something like ['Alert', 'Agile', 'Happy']
//   tempsArray.map(async (temp) => {
//     const found = await Temperaments.findOne({ where: { name: temp } });
//     found && foundTemps.push(found);
//   });

//   const createdDog = await Dog.create(newDog);

//   await createdDog.setTemperaments(foundTemps);

//   return createdDog;
// };

// const postDog = async (req, res) => {
//   try {
//     const {
//       name,
//       imagen,
//       peso,
//       AñosDeVida,
//       temperament,
//     } = req.body;
// console.log(temperament)
//     const newDog = {
//       name,
//       imagen,
//       peso,
//       AñosDeVida,
//       temperament
//     };

//     const tempsArray = await we
//       .split(",")
//       .map((temperament) => temperament.trim());

//     const createdDog = await createDog(newDog, tempsArray);

//     res.status(200).json(createdDog);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = postDog;


const { Dog, Temperaments } = require("../../db");
console.log('llega a la carpeta create');
const postDog = async (req, res) => {
  console.log('entra al try');
  try{
    const {
        name,
        peso,
        AñosDeVida,
        imagen,
        temperaments,
        
    } = req.body
    
    const newDog = await Dog.create({
        name,
        peso,
        AñosDeVida,   
        imagen,
        temperaments
     })
     console.log(temperaments)
        // Asocia los temperamentos al perro recién creado
     if (temperaments && temperaments.length > 0) {
      const temperamentModels = await Temperaments.findAll({
        where: {
          name: temperaments, 
        },
      });

      await newDog.setTemperaments(temperamentModels);
    }
     
     res.status(201).json(newDog);
  } catch(error){
    console.error(error);
    res.status(500).json({error: 'error al crear la raza de perro'})
  }
}

module.exports = postDog