import React, {useContext, useEffect, useState} from 'react'
import { GetProteccion } from './GetFormularios/GetProteccion'
import { GetPeligros } from './GetFormularios/GetPeligros'
import { GetRiesgos } from './GetFormularios/GetRiesgos'
import { GetMedidas } from './GetFormularios/GetMedidas'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { UserContext } from '../../context/userContext'

export const MostrarForms = () => {
    const navigate = useNavigate();
    const { id } = useParams()

    const { socket } = useContext(UserContext);

    const [show, setShow] = useState(false);

    const [motivo, setMotivo] = useState('Falta elementos de proteccion');

    const handleClose = () => setShow(!show);

  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false
  });

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

  const [empresaLocal, setEmpresaLocal] = useState('');
  const [Area, setArea] = useState('');
  const [PermisoTrabajo, setPermisoTrabajo] = useState(0);
  const [Yacimiento, setYacimiento] = useState('');
  const [Tarea, setTarea ] = useState('');
  const [Pasos, setPasos] = useState('');
  const [estado, setEstado] = useState('')
  const [motivoRechazo, setMotivoRechazo] = useState('')
  const [equipo, setEquipo] = useState([]);

  const traerForm = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/formularios/${id}`);
      if (response.status === 200) {
        const formularioHeader = response.data;
        setCheckboxValues(formularioHeader.header);
        setEmpresaLocal(formularioHeader.empresa)
        setArea(formularioHeader.area)
        setPermisoTrabajo(formularioHeader.permisoTrabajo)
        setYacimiento(formularioHeader.yacimiento)
        setTarea(formularioHeader.tarea)
        setPasos(formularioHeader.pasos)
        setTextArea(formularioHeader.textArea)
        setEstado(formularioHeader.estado)
        setMotivoRechazo(formularioHeader.motivo)
        setEquipo(formularioHeader.equipo)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerForm();
  }, []);


  const tableStyle = {
    opacity: 0.7,
    cursor: "not-allowed",
    width: 1000,
    height: 400,
    marginTop: 20
  };
  
  const handleAceptar = async () => {
    try {
       const response = await axios.put(`http://localhost:3000/formularios/${id}`, { estado: 'Aceptado' });
       if(response.status === 200) {
           console.log('Formulario Aceptado');
           Swal.fire({
               icon: 'success',
               text: 'Petición aceptada'
           })
           socket.emit('notificacion')
        navigate('/archivos')
       }
      } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Petición errónea'
        })
        console.error('Error al actualizar el estado del formulario', error);
      }
  };

  const handleRechazar = async  () => {
    try {
      const response = await axios.put(`http://localhost:3000/formularios/${id}`, { estado: 'Denegado', motivo });
      if(response.status === 200){
          console.log('Formulario Denegado');
          handleClose()
          Swal.fire({
            icon: 'success',
            text: 'Petición rechazada'
        })
        socket.emit('notificacion')
       navigate('/archivos')
      }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: 'Petición errónea'
        })
      console.error('Error al actualizar el estado del formulario', error);
    }
  };

  return (
    <div style={{display: "grid", placeItems: 'center', }}>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Motivo del rechazo</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group className='mb-3'>
            <Form.Label>Motivo</Form.Label>
            <Form.Select onChange={({target})=>setMotivo(target.value)}>
              <option>Falta elementos de proteccion</option>
              <option>Descripcion del trabajo incompleta</option>
              <option>Otros</option>
            </Form.Select>
          </Form.Group>

          {motivo !== 'Falta elementos de proteccion' && motivo !== 'Descripcion del trabajo incompleta' && <Form.Control as="textarea" rows={3} placeholder='Escriba el motivo del rechazo' onChange={(e)=>setMotivo(e.target.value)}/>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleRechazar}>
            Rechazar formulario
          </Button>
        </Modal.Footer>
      </Modal>
    <div>
        <h2 className='section-title' style={{color: 'blueviolet', marginTop: 70}}>ATS- ANALISIS DE TRABAJO SEGURO</h2>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label" style={{color:'black'}}>Empresa: {empresaLocal}</label> <br />
        <label for="exampleFormControlInput1" className="form-label" style={{color:'black'}}>Yacimiento: {Yacimiento}</label> <br />
        <label for="exampleFormControlInput1" className="form-label" style={{color:'black'}}>Area o Sector: {Area}</label> <br />
        <label for="exampleFormControlInput1" className="form-label" style={{color:'black'}}>N° Permiso de Trabajo: {PermisoTrabajo}</label>
      </div>

        <table className='table table-striped table-sm' style={tableStyle}>
            <thead>
                <th className='th'>Trabajos Peligrosos</th>
                <th className='th'>Trabajo en:</th>
            </thead>
            <tbody>
                <th>
                    <tr><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1}/> Trabajo en Espacio Confinado</div></tr>
                    <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2}/> Trabajo en Equipo energizado</div></tr>
                    <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3}/> Trabajo en Caliente</div></tr>
                    <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4}/> Trabajo en Altura</div></tr>
                    <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5}/> Trabajo en Zanja o excavaciones</div></tr>
                </th>
                <th>
                    
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6}/> Caminos/picada</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}/> Tanques</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}/> Líneas de conducción</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}/> Pozos</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10}/> Instalación Elec.</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11}/> Equipos</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12}/> Otros</div></tr>
                    
                </th>
            </tbody>
        </table>

        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label" style={{color:'black'}}>Tarea a Ejecutar: {Tarea}</label> <br />
        <label for="exampleFormControlTextarea1" className="form-label" style={{color:'black'}}>Pasos a realizar: {Pasos}</label>
       </div>


    </div>
    <table className='table-responsive' style={tableStyle}>
        <thead>
            <th style={{background:'skyblue'}}>Paso N°</th>
            <th style={{background:'skyblue'}}>Pasos de la tarea</th>
            <th style={{background:'red'}}>Peligros</th>
            <th style={{background:'#FFD700'}}>Riesgos y Consecuencias</th>
            <th style={{background:'#32CD32'}}>Medidas Preventivas y de control</th>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <th>
                <div className="mb-3">
                {textArea.textArea1}
                </div>
                </th>
                <th>
                <div className="mb-3">
                  {textArea.textArea2}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea3}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea4}
                </div>
                </th>
            </tr>
            <tr>
                <th>2</th>
                <th>
                <div className="mb-3">
                {textArea.textArea5}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea6}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea7}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea8}
                </div>
                </th>
            </tr>
            <tr>
                <th>3</th>
                <th>
                <div className="mb-3">
                {textArea.textArea9}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea10}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea11}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea12}
                </div>
                </th>
            </tr>
            <tr>
                <th>4</th>
                <th>
                <div className="mb-3">
                {textArea.textArea13}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea14}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea15}
                </div>
                </th>
                <th>
                <div className="mb-3">
                {textArea.textArea16}
                </div>
                </th>
            </tr>
        </tbody>
    </table>

      <GetProteccion/>
      <GetPeligros/>
      <GetRiesgos/>
      <GetMedidas/>

      <h2 className='section-title mt-4' style={{color: "#012970"}}>Equipo de Trabajo</h2>
      
      <div className="table table-striped table-sm d-flex justify-content-center" style={{width: '800px'}}>
        <table>
          <thead>
            <tr>
              <th className='users'>Compañeros</th>
              <th className='users'>Estado de Solicitud</th>
            </tr>
          </thead>
          <tbody>
            {equipo.map((usuario, i) => (
           
              <tr key={i}>
                <td className='panel'>{usuario.username}</td>
                <td className='panel'>
                  <span className={`badge ${usuario.estado === 'Pendiente' ? 'text-bg-warning' : 'text-bg-success'} rounded-pill `}>
                    {usuario.estado === 'Pendiente' ? 'Pendiente' : 'Aceptado'}
                  </span>
                </td>
              </tr>
             
            ))}

          </tbody>
        </table>
      </div>


      {motivoRechazo &&
        <div className="alert alert-danger text-center" role="alert">
          El formulario de trabajo fue rechazo por el siguiente motivo: <br/> {motivoRechazo}
        </div>}

 {estado === "Pendiente" && (
  <div className='botonesGrupo'>
  <button style={{ marginRight: 15 }} className="btn btn-success" onClick={handleAceptar}>Aceptar</button>
  <button style={{ marginRight: 15 }} className="btn btn-danger" onClick={()=>setShow(true)}>Rechazar</button>
 </div>
 )}
    
    </div>
  )
}


