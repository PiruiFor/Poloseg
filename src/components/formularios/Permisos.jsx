import { Medidas } from './PostFormularios/Medidas';
import { Peligros } from './PostFormularios/Peligros';
import { ProteccionPersonal } from './PostFormularios/ProteccionPersonal';
import { Riesgos } from './PostFormularios/Riesgos';
import { UserContext } from '../../context/userContext';
import {useContext, useEffect, useState} from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import { HeaderTable } from './PostFormularios/HeaderTable';

export const Permisos = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [guardadoCorrecto, setGuardadoCorrecto] = useState(false);
  const [comentario, setComentario] = useState("");
  const {state, socket} = useContext(UserContext)
  const baseUrl = "http://localhost:3000/registrar";

  const fetchUsuario = async () => {
    try {
      const response = await axios.get(baseUrl);

      if (response.status === 200) {
       
        const operarios = response.data.filter((usuario) => usuario.role === "Operario");
        console.log(operarios)
        setUsuarios(operarios);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsuario();
  }, []);
  const [guardadoHeader, setGuardadoHeader] = useState(false)
  const [guardadoProteccionPersonal, setGuardadoProteccionPersonal] = useState(false);
  const [guardadoPeligros, setGuardadoPeligros] = useState(false);
  const [guardadoRiesgos, setGuardadoRiesgos] = useState(false);
  const [guardadoMedidas, setGuardadoMedidas] = useState(false);

  const [proteccion, setCheckboxesProteccion] = useState({});
  const [header, setCheckboxesHeader] = useState({});
  const [peligros, setCheckboxesPeligros] = useState({});
  const [riesgos, setCheckboxesRiesgos] = useState({});
  const [medidas, setCheckboxesMedidas] = useState({});

  const [equipo, setEquipo] = useState([]);
  const [empresa, setEmpresa] = useState('');
  const [area, setArea] = useState('');
  const [yacimiento, setYacimiento] = useState('');
  const [permisoTrabajo, setPermisoTrabajo] = useState(0);
  const [tarea, setTarea] = useState('');
  const [pasos, setPasos] = useState('');
  const [observaciones, setObservaciones] = useState('')
  const [userFilter, setUserFilter] = useState('')
  
  const usuariosFiltrados = usuarios.filter(usuario => usuario.username.toLowerCase().includes(userFilter.toLowerCase()))


  useEffect(()=>{
    console.log(equipo)
  },[equipo])

  const [estado, setEstado] = useState('Pendiente')
 
  const fechaEnvio = new Date()
  
  const handleEnviarFormulario = async () => {
    try {
     
      if (
        guardadoHeader &&
        guardadoProteccionPersonal &&
        guardadoPeligros &&
        guardadoRiesgos &&
        guardadoMedidas
      ) {
        
        const formulariosData = {
          header,
          proteccion,
          peligros,
          riesgos,
          medidas,
          fechaEnvio,
          estado: estado,
          username: state.nombre,
          comentario: comentario,
          empresa,
          area,
          yacimiento,
          permisoTrabajo,
          tarea,
          pasos,
          observaciones: observaciones,
          textArea,
          equipo
        }

        const response = await axios.post('http://localhost:3000/formularios', formulariosData);

        if (response.status === 200) {
          console.log('Formularios enviados correctamente');
          setGuardadoCorrecto(true);
          Swal.fire({
            icon: 'success',
            text: 'Formulario Completo Enviado'
          })
          socket.emit('notificacion');
        } else {
          console.log('Error al enviar formularios');
          Swal.fire({
            icon: 'error',
            text: 'No se pudo mandar el formulario completo'
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Formulario incompleto'
        })
        console.log('No todos los formularios están guardados correctamente');
      }
    } catch (error) {
      console.error('Error al enviar formularios', error);
    }
  };

  const submitText = async ()=>{
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      if (text) {
        Swal.fire({
          title: 'Tu comentario: ',
          text
        })
       setComentario(text)
    }
  }

  const [textArea, setTextArea] = useState({
    textArea1: '',
    textArea2: '',
    textArea3: '',
    textArea4: '',
    textArea5: '',
    textArea6: '',
    textArea7: '',
    textArea8: '',
    textArea9: '',
    textArea10: '',
    textArea11: '',
    textArea12: '',
    textArea13: '',
    textArea14: '',
    textArea15: '',
    textArea16: ''
  })


  const handleAñadirSolicitud = (user) => {
    setEquipo((prevEquipo) => ([
      ...prevEquipo,
      user
    ]));
    Swal.fire({
      title: 'Solicitud enviada',
      icon: 'success'
    })
  };

  return (
  <>
  <div style={{display: "grid", placeItems: 'center'}}>
    <HeaderTable
    onGuardadoChange={setGuardadoHeader}
    onCheckboxesChange={setCheckboxesHeader}
    onEmpresaChange={setEmpresa}
    onYacimientoChange={setYacimiento}
    onAreaChange={setArea}
    onPermisoTrabajoChange={setPermisoTrabajo}
    onTareaChange={setTarea}
    onPasosChange={setPasos}
    onTextAreaChange={setTextArea}
    />
    <div>
      <ProteccionPersonal 
      onGuardadoChange={setGuardadoProteccionPersonal}
      onCheckboxesChange={setCheckboxesProteccion}
      />
      <Peligros 
      onGuardadoChange= {setGuardadoPeligros}
      onCheckboxesChange={setCheckboxesPeligros}
      />
      <Riesgos 
      onGuardadoChange= {setGuardadoRiesgos}
      onCheckboxesChange={setCheckboxesRiesgos}
      />
      <Medidas 
      onGuardadoChange= {setGuardadoMedidas}
      onCheckboxesChange={setCheckboxesMedidas}
      />

    <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label" style={{color:'#32CD32'}}>Observaciones:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Necesito...' rows="2" value={observaciones} onChange={(e) => setObservaciones(e.target.value)}></textarea>
    </div>

      <div style={{marginBottom: 30}}>
      <h2 className='section-title' style={{color: "#012970"}}>Equipo de Trabajo</h2>
      <div className="table table-striped table-sm">
            <table>
              <thead>
                <th colSpan={3}><input type="text" placeholder='Buscar por nombre' onChange={({target})=>setUserFilter(target.value)} className='form-control'/></th>
              </thead>
                <thead>
                    <tr>
                        <th className='users'>Compañeros</th>
                        <th className='users'>Estado de Solicitud</th>
                        <th className='users'>Acciones</th> 
                    </tr>
                </thead>
                <tbody>
                  {usuariosFiltrados.map((usuario, i) => (
                    <tr key={i}>
                      <td className='panel'>{usuario.username}</td>
                      <td className='panel'>
                        <span className={`badge ${equipo.find(user => user.username === usuario.username)?.estado === 'Pendiente' ? 'text-bg-warning' : 'text-bg-danger'} rounded-pill `}>
                          {equipo.find(user => user.username === usuario.username)?.estado || 'None'}
                        </span>
                      </td>

                      <td className='panel'>
                        {
                          equipo.find(user => user.username === usuario.username)?.estado === 'Pendiente'
                            ? (
                              <button onClick={() => setEquipo(equipo.filter(user => user.id !== usuario._id))} type="button" className="btn btn-primary" style={{ marginRight: 15 }}>
                                Cancelar
                              </button>

                            )
                            :
                            (
                              <button onClick={() => handleAñadirSolicitud({ username: usuario.username, id: usuario._id, estado: 'Pendiente' })} type="button" className="btn btn-primary" style={{ marginRight: 15 }}>
                                Añadir
                              </button>
                            )
                        }
                        
                      </td>
                    </tr>

                  ))}

                </tbody>
            </table>
     </div>
    </div>

       <button onClick={submitText} style={{marginRight: 15}} className="btn btn-warning"> Escribe un comentario </button>
       <button type='submit' className='btn btn-primary' style={{margin: 30}} onClick={handleEnviarFormulario}>Enviar Formulario</button>
    </div>
  </div>
  </>

  )
}


