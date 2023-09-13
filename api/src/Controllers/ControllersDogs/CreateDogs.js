const { Dog, Temperaments } = require("../../db");

const postDog = async (req, res) => {

  try{
    const {
        name,
        weight_min,
        weight_max,
        life_span,
        image,
        height_min,
        temperaments,
        height_max,
        // bred_for,
        // breed_group,
        // origin
    } = req.body
    
    const newDog = await Dog.create({
      name,
      weight_min,
      weight_max,
      life_span,
      image,
      height_max,
      height_min,
     })
     
     
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
    res.status(500).json({error: error.message})
  }
}

module.exports = postDog