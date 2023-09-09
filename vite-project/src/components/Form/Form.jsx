import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { createDog } from '../../Redux/action'
const Form = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name:'',
    imagen:'',
    weight_min:'',
    weight_max:'',
    life_span:''
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();
    dispatch(createDog(formData));
    // Limpia los campos del formulario después de enviar
    setFormData({
      name: '',
      imagen: '',
      peso: '',
      AñosDeVida: '',
    })
  }






  return (
    <div>
      <h2>Crea tu propio Perro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          />
        </label>
        <br/>
        <label>
          imagen: 
          <input
          type='text'
          name='imagen'
          value={formData.imagen}
          onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Peso:
          <input
          type = "text"
          name = "peso"
          value={formData.peso}
          onChange={handleInputChange}
        />
        </label>
        <br />
        <label>
        Años de Vida:
          <input
          type="text"
          name="AñosDeVida"
          value={formData.AñosDeVida}
          onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Crear Raza</button>
      </form>

    </div>
  )
}

export default Form