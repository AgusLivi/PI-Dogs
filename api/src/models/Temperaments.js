const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
   
    sequelize.define("Temperaments", {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        }
        
    })
}
