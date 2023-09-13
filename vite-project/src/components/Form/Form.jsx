import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createDog, getTemperaments } from '../../Redux/action'
import './FormModule.css'
const Form = () => {
  const dispatch = useDispatch()
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    name:'',
    image:'',
    weight_min:'',
    weight_max:'',
    life_span:'',
    height_min:'',
    height_max:'',
    temperaments: []
  })
  const allTemperaments = useSelector((state)=>state.temperament)

  const isFormValid = () => {
    return (
      formData.name &&
      formData.image &&
      formData.weight_min > 0 &&
      formData.weight_max > 0 &&
      formData.life_span > 0 &&
      formData.height_min > 0 &&
      formData.height_max > 0 &&
      formData.temperaments.length > 0 
    );
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    if (name === 'weight_min') {
      // Verificar si el peso mínimo es mayor que el peso máximo
      const weightMin = parseFloat(value);
      const weightMax = parseFloat(formData.weight_max);
      if (weightMin > weightMax) {
        setAlertMessage('El peso mínimo no puede ser mayor que el peso máximo.');
      } else {
        setAlertMessage(''); // Limpiar la alerta si la validación es exitosa
      }
    }


     // Verificar si el campo "Altura mínima" es mayor que el campo "Altura máxima"
  if (name === 'height_min') {
    const heightMin = parseFloat(value);
    const heightMax = parseFloat(formData.height_max);
    if (heightMin > heightMax) {
      setAlertMessage('La altura mínima no puede ser mayor que la altura máxima.');
    } else {
      setAlertMessage(''); // Limpiar la alerta si la validación es exitosa
    }
  }

   


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
      height_max: formData.height_max,
      height_min: formData.height_min,
      temperaments: formData.temperaments
    }
    try {
    await dispatch(createDog(formDataToSend));
    // Limpia los campos del formulario después de enviar
    setFormData({
      name: '',
      image: '',
      weight_min: '',
      weight_max: '',
      life_span: '',
      height_max: '',
      height_min:'',
      temperaments: [],
    })
    
    }catch (error) {
      console.error('error al crear el perro:', error)
    }
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
        <label className='form-label'>
          Peso minimo:
          <input
          type = "number"
          name = "weight_min"
          value={formData.weight_min}
          onChange={handleInputChange}
          className='form-input'
        />
        </label>
        <br />
        <label className='form-label'>
          Peso Máximo:
          <input
            type="number"
            name="weight_max"
            value={formData.weight_max}
            onChange={handleInputChange}
            className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
        Años de Vida:
          <input
          type="number"
          name="life_span"
          value={formData.life_span}
          onChange={handleInputChange}
          className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Altura Mínima:
          <input
          type='number'
          name='height_min'
          value={formData.height_min}
          onChange={handleInputChange}
          className='form-input'
          />
        </label>
        <br />
        <label className='form-label'>
          Altura Máxima:
          <input
          type='number'
          name='height_max'
          value={formData.height_max}
          onChange={handleInputChange}
          className='form-input'
          />
        </label>
     
        <br />
        <label>
          Temperament:
          
          <div className='checkbox-container'>
         {allTemperaments.map((temp, index)=>(
            <div key={index} className='checkbox-row'>
              <label  className='checkbox-label'>
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
            </div>
            ))}
          </div>
        </label>
          <br />
        {alertMessage && (
           <div className="alert">
            {alertMessage}
              <button onClick={() => setAlertMessage('')}>Cerrar</button>
           </div>
          )}
        {isFormValid() && (
            <button className='form-button' type='submit'>
              Crear Raza
            </button>
             )}
      </form>

    </div>
  )
}

export default Form






