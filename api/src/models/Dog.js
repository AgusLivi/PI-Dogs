const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
   id: {
      type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
  },
    image: {
      type: DataTypes.STRING,
      allowNull: false,  
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNameValid(value) {
          const nameRegex = /^[A-Z][a-zA-Z]*(?:[ -][a-zA-Z]+)*$/;
          if (!nameRegex.test(value)) {
            throw new Error(
              "The 'name' property does not meet the required format"
            );
          }
        },
      },
  },
    weight_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
    weight_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
    life_span: {
      type: DataTypes.INTEGER,
      allowNull: false
  },

  height_min: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  height_max: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
      { timestamps: false }
   );
};
