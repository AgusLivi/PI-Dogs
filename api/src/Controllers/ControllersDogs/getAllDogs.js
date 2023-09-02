const URL = 'https://api.thedogapi.com/v1/breeds?limit=8'
const axios = require('axios')
require('dotenv').config()

const getAllDogs = async (req, res) => {
    try{
  const {data} = await axios(URL)
  console.log("All dogs")
  res.json(data)
    } catch{
        res.send(500).json({error: 'No se enviaron todos los perros'})
    }
}
module.exports = getAllDogs
