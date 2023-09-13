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
      // validate: {
      //   validateFormat(value) {
      //     if (!value.url) {
      //       throw new Error('The "image" object must have "url" property.');
      //     }

      //     const imageUrlRegex =
      //       /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
      //     if (!imageUrlRegex.test(value.url)) {
      //       throw new Error(
      //         "The 'url' property does not meet the required format"
      //       );
      //     }
      //   },
      // },
      
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
  //   bred_for: {
  //     type: DataTypes.STRING,
  //   //     validate: {
  //   //       isBredForValid(value) {
  //   //        const bredForRegex = /^.{5,}$/;
  //   //        if (value && !bredForRegex.test(value)) {
  //   //        throw new Error(
  //   //           "The 'bred_for' property does not meet the required format"
  //   //       );
  //   //     }
  //   //   },
  //   // },
  // },
  // breed_group: {
  //   type: DataTypes.STRING,
  //   // validate: {
  //   //   isBreedGroupValid(value) {
  //   //     const breedGroupRegex = /^.{3,}$/;
  //   //     if (value && !breedGroupRegex.test(value)) {
  //   //       throw new Error(
  //   //         "The 'breed_group' property does not meet the required format"
  //   //       );
  //   //     }
  //   //   },
  //   // },
  // },
  // origin: {
  //   type: DataTypes.STRING,
  //   // validate: {
  //   //   isOriginValid(value) {
  //   //     const originRegex = /^[^\d,]+\s*,\s*[^\d,]+$/;
  //   //     if (value && !originRegex.test(value)) {
  //   //       throw new Error(
  //   //         "The 'origin' property does not meet the required format"
  //   //       );
  //   //     }
  //   //   },
  //   // },
  // // }
  //   // }
  // },  
},
      { timestamps: false }
   );
};
