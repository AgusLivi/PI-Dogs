// import React,{useEffect, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { createDog, getTemperaments } from '../../Redux/action'
// const Form = () => {
//   const dispatch = useDispatch()
//   const [formData, setFormData] = useState({
//     name:'',
//     image:'',
//     weight_min:'',
//     weight_max:'',
//     life_span:'',
//     temperament: []
//   })
//   const allTemperaments = useSelector((state)=>state.allTemperaments)
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   useEffect(()=>{
//     if(!allTemperaments.length) dispatch(getTemperaments())
//   }, [])
//   const handleTemperamentChange = (event) =>{
//     const {name, checked} = event.target;
//     const updatedTemp = [...formData.temperament]
//     if (checked) {
//       updatedTemp.push(name)
//       // Agregar el temperamento si está marcado
//     } else {
//       // Eliminar el temperamento si se desmarca
//      const index = updatedTemp.indexOf(name);
//      if(index !== -1){
//       updatedTemp.splice(index, 1)
//      }
//     }
//    //Actualiza el estado del formulario con los temperamentos seleccionados
//     setFormData({
//       ...formData,
//       temperament: updatedTemp,
//     });
//   }


//   const handleSubmit = async (event) =>{
//     event.preventDefault();
//     const formDataToSend = {
//       name: formData.name,
//       image: formData.image,
//       weight_max: formData.weight_max,
//       weight_min: formData.weight_min,
//       life_span: formData.life_span,
//       temperament: formData.temperament
//     }
//     dispatch(createDog(formDataToSend));
//     // Limpia los campos del formulario después de enviar
//     setFormData({
//       name: '',
//       image: '',
//       weight_min: '',
//       weight_max: '',
//       life_span: '',
//       temperament: [],
//     })
//   }






//   return (
    
//     <div>
//       <h2>Crea tu propio Perro</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nombre:
//           <input 
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           />
//         </label>
//         <br/>
//         <label>
//           imagen: 
//           <input
//           type='text'
//           name='image'
//           value={formData.image}
//           onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Peso minimo:
//           <input
//           type = "number"
//           name = "weight_min"
//           value={formData.weight_min}
//           onChange={handleInputChange}
//         />
//         </label>
//         <br />
//         <label>
//           Peso Máximo:
//           <input
//             type="number"
//             name="weight_max"
//             value={formData.weight_max}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//         Años de Vida:
//           <input
//           type="number"
//           name="life_span"
//           value={formData.life_span}
//           onChange={handleInputChange}
//           />
//         </label>
//         <br />
     
//         <br />
//          {formData.map((temp, index)=>(
//             <div key={index}>
//             <input
//             type="checkbox"
//             name={temp}
//             value={formData.id}
//             checked={formData.temperament.includes(temp)}
//             onChange={handleTemperamentChange}
//             />
//              {temp}
//             </div>
      
//     ))}
//         <br />
//         <button type="submit">Crear Raza</button>
//       </form>

//     </div>
//   )
// }

// export default Form
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDog, getTemperaments } from '../../Redux/action';
import { all } from 'axios';

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    weight_min: '',
    weight_max: '',
    life_span: '',
    temperament: '', // Un campo para almacenar el temperamento seleccionado
  });

  const allTemperaments = useSelector((state) => state.allTemperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = {
      name: formData.name,
      image: formData.image,
      weight_max: formData.weight_max,
      weight_min: formData.weight_min,
      life_span: formData.life_span,
      temperament: formData.temperament, // Usamos el temperamento seleccionado
    };

    dispatch(createDog(formDataToSend));

    // Limpia los campos del formulario después de enviar
    setFormData({
      name: '',
      image: '',
      weight_min: '',
      weight_max: '',
      life_span: '',
      temperament: '', // Restablece el temperamento seleccionado
    });
  };
console.log(allTemperaments)
  return (
    <div>
      <h2>Crea tu propio Perro</h2>
      <form onSubmit={handleSubmit}>
        {/* Otros campos de entrada */}
        <label>
          Temperamento:
          <select
            name="temperament"
            value={formData.temperament}
            onChange={handleInputChange}
          >
            <option value="">Selecciona un temperamento</option>
            {allTemperaments.map((temp, index) => (
              <option key={index} value={temp}>
                {temp}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Crear Raza</button>
      </form>
    </div>
  );
};

export default Form;