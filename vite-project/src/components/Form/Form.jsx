import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { createDog } from '../../Redux/action'
const Form = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name:'',
    image:'',
    weight_min:'',
    weight_max:'',
    life_span:'',
    temperament: []
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleTemperamentChange = (event) =>{
    const {name, checked} = event.target;
    if (checked) {
      // Agregar el temperamento si está marcado
      setFormData({
        ...formData,
        temperament: [...formData.temperament, name]
      })
    } else {
      // Eliminar el temperamento si se desmarca
      setFormData({
        ...formData,
        temperament: formData.temperament.filter((temp)=> temp !== name),
      })
    }
  }


  const handleSubmit = async (event) =>{
    event.preventDefault();
    dispatch(createDog(formData));
    // Limpia los campos del formulario después de enviar
    setFormData({
      name: '',
      image: '',
      weight_min: '',
      weight_max: '',
      life_span: '',
      temperament: [],
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
        <label>
          Temperamentos:
          <div>
            <input
              type="checkbox"
              name="temperament1"
              checked={formData.temperament.includes('temperament1')}
              onChange={handleTemperamentChange}
            />
              Temperamento 1
          </div>
          <div>
            <input
              type="checkbox"
              name="temperament2"
              checked={formData.temperament.includes('temperament2')}
              onChange={handleTemperamentChange}
            />
            Temperamento 2
          </div>
         </label>
        
        <br />
        <button type="submit">Crear Raza</button>
      </form>

    </div>
  )
}

export default Form