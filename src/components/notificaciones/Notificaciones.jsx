import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import './notificaciones.css'
import { useNavigate } from 'react-router-dom';

export const Notificaciones = () => {

    const { notificaciones } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <>
            <div id='notificaciones'>
                <div className="container" style={{marginTop: '100px'}}>
                    <h1>Notificaciones</h1>
                    <div className='d-flex justify-content-center' style={{minHeight: '80vh'}}>
                        <ul>
                            {notificaciones.map((notificacion, i) => (
                                notificacion.tipo === "invitacion" ?
                                    
                                    <li className={notificacion.estado !== 'Pendiente' && 'viewed'} onClick={() => notificacion.estado === 'Pendiente' && navigate(`/notificaciones/${notificacion.idForm}/${notificacion._id}`)}>
                                        {notificacion.estado !== 'Pendiente' &&
                                            <div class="disabled-overlay">
                                                <div class={`disabled-message ${notificacion.estado}`}>Ya has {notificacion.estado} esta invitacion</div>
                                            </div>}
                                        <h3>Invitacion de trabajo #{notificacion.permisoTrabajo}</h3>
                                        <p>{notificacion.mensaje}</p>
                                        <div class="date">{new Date(notificacion.createdAt).toLocaleDateString('es')}</div>
                                    </li>
                                     :
                                    
                                        <li className={notificacion.estado === 'Denegado' ? 'denegado' : 'aceptado'} onClick={() =>navigate(`/formularios/${notificacion.idForm}`)}>
                                       
                                        <h3>Permiso de trabajo #{notificacion.permisoTrabajo}</h3>
                                        <p>{notificacion.mensaje}</p>
                                        <div class="date">{new Date(notificacion.createdAt).toLocaleDateString('es')}</div>
                                    </li>

                            )).reverse()
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
