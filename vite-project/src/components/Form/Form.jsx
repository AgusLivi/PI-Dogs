import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createDog, getTemperaments } from '../../Redux/action'
import './FormModule.css'
const Form = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name:'',
    image:'',
    weight_min:'',
    weight_max:'',
    life_span:'',
    temperaments: []
  })
  const allTemperaments = useSelector((state)=>state.temperament)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(()=>{
    if(!allTemperaments.length) dispatch(getTemperaments())
  }, [])
  const handleTemperamentChange = (event) =>{
    const {name, checked} = event.target;
    const updatedTemp = [...formData.temperaments]
    if (checked) {
      updatedTemp.push(name)
      // Agregar el temperamento si está marcado
    } else {
      // Eliminar el temperamento si se desmarca
     const index = updatedTemp.indexOf(name);
     if(index !== -1){
      updatedTemp.splice(index, 1)
     }
    }
   //Actualiza el estado del formulario con los temperamentos seleccionados
    setFormData({
      ...formData,
      temperaments: updatedTemp,
    });
  }


  const handleSubmit = async (event) =>{
    event.preventDefault();
    const formDataToSend = {
      name: formData.name,
      image: formData.image,
      weight_max: formData.weight_max,
      weight_min: formData.weight_min,
      life_span: formData.life_span,
      temperaments: formData.temperaments
    }
    dispatch(createDog(formDataToSend));
    // Limpia los campos del formulario después de enviar
    setFormData({
      name: '',
      image: '',
      weight_min: '',
      weight_max: '',
      life_span: '',
      temperaments: [],
    })
  }






  return (
    
    <div className='form-container'>
      <h2 className='form-title'>Crea tu propio Perro</h2>
      <form onSubmit={handleSubmit}>
        <label className='form-label'>
          Nombre:
          <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="form-input"
          />
        </label>
        <br/>
        <label>
          imagen: 
          <input
          type='text'
          name='image'
          value={formData.image}
          onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Peso minimo:
          <input
          type = "number"
          name = "weight_min"
          value={formData.weight_min}
          onChange={handleInputChange}
        />
        </label>
        <br />
        <label>
          Peso Máximo:
          <input
            type="number"
            name="weight_max"
            value={formData.weight_max}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        Años de Vida:
          <input
          type="number"
          name="life_span"
          value={formData.life_span}
          onChange={handleInputChange}
          />
        </label>
        <br />
     
        <br />
        <label>
          Temperament:
          <div className='checkbox-container'>
         {allTemperaments.map((temp, index)=>(
            <label key={index} className='checkbox-label'>
            <input  
            type="checkbox"
            name={temp}
            value={formData.id}
            checked={formData.temperaments.includes(temp)}
            onChange={handleTemperamentChange}
            className='checkbox-input'
            />
             {temp}
             </label>
             ))}
             </div>
           </label>
        <br />
        <button className="form-button"type="submit">Crear Raza</button>
      </form>

    </div>
  )
}

export default Form
// import React,{useEffect, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { createDog, getTemperaments } from '../../Redux/action'
// import './FormModule.css'
// const Form = () => {
//   const dispatch = useDispatch()
//   const [formData, setFormData] = useState({
//     name:'',
//     image:'',
//     weight_min:'',
//     weight_max:'',
//     life_span:'',
//     origin:'',
//     bred_for:'',
//     breed_group:'',
//     temperaments: []
//   })
//   const allTemperaments = useSelector((state)=>state.temperament)
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
//     const updatedTemp = [...formData.temperaments]
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
//       temperaments: updatedTemp,
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
//       origin: formData.origin,
// bred_for: formData.bred_for,
// breed_group: formData.breed_group,


//       temperaments: formData.temperaments
//     }
//     dispatch(createDog(formDataToSend));
//     // Limpia los campos del formulario después de enviar
//     setFormData({
//       name: '',
//       image: '',
//       weight_min: '',
//       weight_max: '',
//       life_span: '',
//       origin:'',
// bred_for:'',
// breed_group:'',

//       temperaments: [],
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

//           <label>
//           Origen:
//             <input 
//               type='text'
//               name="origin"
//               value={formData.origin}
//               onChange={handleInputChange}
//                     />
//            </label>
//           <label>
//            bred_for:
//             <input 
//               type='text'
//               name="bred_for"
//               value={formData.bred_for}
//               onChange={handleInputChange}
//             />
//                 </label>
//             <br />
//             <label>
//             breed_group:
//             <input 
//             type='text'
//              name="breed_group"
//             value={formData.breed_group}
//           onChange={handleInputChange}
//           />
//             </label>
     
//             <br />
//         <label>
//           Temperament:
//           <div className='checkbox-container'>
//          {allTemperaments.map((temp, index)=>(
//             <label key={index} className='checkbox-label'>
//             <input  
//             type="checkbox"
//             name={temp}
//             value={formData.id}
//             checked={formData.temperaments.includes(temp)}
//             onChange={handleTemperamentChange}
//             className='checkbox-input'
//             />
//              {temp}
//              </label>
//              ))}
//              </div>
//            </label>
//         <br />
//         <button type="submit">Crear Raza</button>
//       </form>

//     </div>
//   )
// }

// export default Form









// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createDog, getTemperaments } from '../../Redux/action';


// const Form = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: '',
//     image: '',
//     weight_min: '',
//     weight_max: '',
//     life_span: '',
//     temperament: '', // Un campo para almacenar el temperamento seleccionado
//   });

//   const allTemperaments = useSelector((state) => state.temperament);

//   useEffect(() => {
//     dispatch(getTemperaments());
//   }, [dispatch]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formDataToSend = {
//       name: formData.name,
//       image: formData.image,
//       weight_max: formData.weight_max,
//       weight_min: formData.weight_min,
//       life_span: formData.life_span,
//       temperament: formData.temperament, // Usamos el temperamento seleccionado
//     };

//     dispatch(createDog(formDataToSend));

//     // Limpia los campos del formulario después de enviar
//     setFormData({
//       name: '',
//       image: '',
//       weight_min: '',
//       weight_max: '',
//       life_span: '',
//       temperament: '', // Restablece el temperamento seleccionado
//     });
//   };

//   return (
//     <div>
//       <h2>Crea tu propio Perro</h2>
//       <form onSubmit={handleSubmit}>
        
//         <label>
//           Temperamento:
//           <select
//             name="temperament"
//             value={FormData.temperament}
//             onChange={handleInputChange}
//           >
//             <option value="">Selecciona un temperamento</option>
//             {allTemperaments.map((temp, index) => (
//               <option key={index} value={temp}>
//                 {temp}
//               </option>
//             ))}
//           </select>
//         </label>
//         <br />
//         <button type="submit">Crear Raza</button>
//       </form>
//     </div>
//   );
// };

// export default Form;