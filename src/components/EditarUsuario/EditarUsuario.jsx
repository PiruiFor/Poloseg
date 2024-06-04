import React, {useState} from 'react'
import './editarUsuario.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';

export const EditarUsuario = () => {
      
      const id = useParams()
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const [DNI, setDNI] = useState('')
      const [telefono, setTelefono] = useState('')

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
          setUsername(value);
        } else if (name === 'password') {
          setPassword(value);
        } else if (name === 'DNI'){
          setDNI(value)
        } else if (name === 'Telefono') {
          setTelefono(value)
        }
      };

   

      const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const userData = {username, password, DNI, telefono}
            const response = await axios.post(`http://localhost:3000/registrar/${id}`, userData);
            if (response.status ===200){
                console.log('Editado correctamente')
                Swal.fire({
                    icon: 'success',
                    text: 'Usuario Editado correctamente'
                })
            }
            console.log('Respuesta del servidor:', response.data);
          } catch (error) {
            console.error('Error al enviar los datos:', error);
          }
      }
    

  return (
    <div className="fondopag container mt-5">
    <form className='form' style={{marginTop: 70}}>
              <h2 className='form-h2'>Editar Usuario</h2>
        <div className="mb-3">
            <label for="username" className="form-label">Nombre de usuario:</label>
            <input 
            type="text" 
            className="form-control" 
            id="username" 
            name="username"
            value={username}
            onChange={handleInputChange}
            required/>
        </div>
        <div className="mb-3">
            <label for="password" className="form-label">Contraseña:</label>
            <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            value={password}
            onChange={handleInputChange}
            required/>
        </div>
        <div className="mb-3">
            <label for="dni" className="form-label">DNI:</label>
            <input 
            type="text" 
            className="form-control" 
            id="DNI" 
            name="DNI" 
            value={DNI}
            onChange={handleInputChange}
            required/>
        </div>
        <div className="mb-3">
            <label for="telefono" className="form-label">Teléfono:</label>
            <input 
            type="text" 
            className="form-control" 
            id="telefono" 
            name="Telefono"
            value={telefono}
            onChange={handleInputChange}
            required/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Guardar Cambios</button>
    </form>
</div>
  )
}

