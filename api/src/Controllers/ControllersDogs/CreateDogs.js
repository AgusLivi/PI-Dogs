const { Dog, Temperament } = require("../../db");

const createDog = async (req, res) => {
  try{
    const {
        name,
        peso,
        AñosDeVida,
        imagen,
        temperaments
    } = req.body
    const newDog = await Dog.create({
        name,
        peso,
        AñosDeVida,   
        imagen,
     })
        // Asocia los temperamentos al perro recién creado
     if (temperaments && temperaments.length > 0) {
      const temperamentModels = await Temperament.findAll({
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