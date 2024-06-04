import { useState } from 'react';
import Swal from 'sweetalert2'
import './Register.css'

export const Register = () => {
  const [username, setUsername] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Operario');
  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'role') {
      setRole(value)
    } else if (name === 'nombreCompleto'){
      setNombreCompleto(value)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const crearUsuario = {
        username,
        password,
        role,
        nombreCompleto
    }
        const respuesta = await fetch('http://localhost:3000/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(crearUsuario)
        })
      
        if (respuesta.ok){
          Swal.fire({
            icon: 'success',
            title: 'Usuario creado'
          })
        
          console.log("Usuario creado correctamente")
        } else if (respuesta.status === 409){
          Swal.fire({
            icon: 'error',
            title: 'Error, el usuario ya existe'
          })
        } else (console.log("Error al crear el usuario"))
       
  }

  return ( 
    <>
<form onSubmit={handleSubmit} className='form'>
<h2 className='form-h2'>Crear Usuario</h2>
  <div className="flex-column"><label>Nombre Completo</label></div>
  <input
          type="text"
          name="nombreCompleto"
          value={nombreCompleto}
          onChange={handleInputChange}
          placeholder='Nombre y Apellido..'
          className="inputForm"
          required
        />

  <div className="flex-column"><label>Usuario</label></div>
    <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder='Usuario'
          className="inputForm"
          required
        />
   
  
  <div className="flex-column"> <label >Contraseña</label>  </div>
   
    <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          placeholder='Contraseña'
          onChange={handleInputChange}
          className="inputForm"
          autoComplete="off"
          required
        />
      <button type="button" className="revelar" onClick={handleTogglePassword}>
      <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
      </button>
   <div className="flex-column"> <label >Tipo de Usuario</label>  </div>  
     <select
        className='roles'
        name='role'
        value={role}
        onChange={handleInputChange}
        required
      > 
        <option value="Operario">Operario</option>
        <option value="Supervisor">Supervisor</option>
     </select>
     <div id='crear'><button type="submit" className="btn btn-info">Crear usuario</button></div>
 <br />
<img src="./assets/img/icono.png"  style={{marginTop: 10}} className='iconoForm'/>
<p className= 'p '>@ Coryright POLOSEG Formosa 2023</p>
</form>

</>
  );
}

