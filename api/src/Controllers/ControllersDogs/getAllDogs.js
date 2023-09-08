const URL = 'https://api.thedogapi.com/v1/breeds/?api_key=live_XMLfXFNj3FZP06BgfY6Mfr3a41vw825LIO5tYLVcTglgPYhkexln6aMsXYstrX4U'
const axios = require('axios')
require('dotenv').config()
const {API_KEY}=process.env

const getAllDogs = async (req, res) => {
    try{
  const {data} = await axios.get(URL)
  console.log("All dogs")
  res.json(data)
    } catch{
        res.send(500).json({error: 'No se enviaron todos los perros'})
    }
}
module.exports = getAllDogs
