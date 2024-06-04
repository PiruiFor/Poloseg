import {useState, useEffect } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import './PanelControl.css'

export const PanelControl = () => {
const [usuarios, setUsuarios] = useState([]);

const baseUrl = "http://localhost:3000/registrar";

const fetchUsuario = async () => {
    try {
      const response = await axios.get(baseUrl);

      if(response.status === 200){
        setUsuarios(response.data);
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      fetchUsuario();
      console.log('Usuario eliminado correctamente');
      Swal.fire({
        icon: 'success',
        title: 'Usuario eliminado correctamente'
      })
    } catch (error) {
      console.log(error.message);
    }
  };
  
  useEffect(()=>{
    fetchUsuario();
  },[]);

  return (
    <>
    <div className='panelControl' id='content-area'>
        <h2 className='section-title' style={{color: 'blue'}}>Usuarios del Sistema</h2>
        <div className='table table-sm' id='panelControl'>
            <table>
                <thead>
                    <tr>
                        <th className='users'>Usuarios</th>
                        <th className='users'>Tipo de Usuario</th>
                        <th className='users'>Estado</th>
                        <th className='users'>Fecha de Alta</th>
                        <th className='users'>Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, i)=>(
                <tr key={i}>
                     <td className='panel'>{usuario.username}</td>
                     <td className='panel'>{usuario.role}</td>
                     <td className='panel'>
                          <span className={`badge ${usuario.active ? 'text-bg-success' : 'text-bg-danger' } rounded-pill `}>
                            {usuario.active ? 'Activo' : 'Inactivo'}
                          </span>
                    </td>
                     <td className='panel'>{new Date(usuario.date).toLocaleString()}</td>
                     <td className='panel'>
                    <button 
                    type='button'
                    className='btn btn-danger'
                    onClick={()=> eliminarUsuario(usuario._id)}>Eliminar
                     </button>
                    
                     </td>
                 </tr>
                 
                 ))}
                    
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

