const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    ID: {
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
  // temperaments: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // }
  },  
      { timestamps: false }
   );
};
