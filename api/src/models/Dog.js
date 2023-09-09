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
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
    AñosDeVida: {
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
