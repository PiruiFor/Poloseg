import "./aside.css"
import {Link} from "react-router-dom";
import {useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

export const Aside = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { state, notificaciones, setNotificaciones, socket } = useContext(UserContext);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuBtnChange = () => {
    if (isSidebarOpen) {
      
      return "bx bx-menu";
    } else {
      
      return "bx bx-menu";
    }
  };
  

  const getNotificaciones = async () =>{
    const peticion = await fetch('http://localhost:3000/notificaciones', {
      headers: {
        token: state.token
      }
    })

    const respuesta = await peticion.json();
    console.log(respuesta)
    setNotificaciones(respuesta ? respuesta : []);
  };


  useEffect(() => {
    socket.on('new_notificacion', (data) => {
      console.log('Nueva notificacion')
      getNotificaciones();
    });

    return () => {
      socket.off('new_notificacion');
    }
  })

  useEffect(()=>{
    getNotificaciones();
  },[])

return(
  <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

  <div className="logo-details">
    <div className="logo_name">
    <img src="./assets/img/icono.png" alt="profileImg" height= "25" width="25" style={{marginRight: '20'}}/>
      POLOSEG
    </div>
    <button onClick={toggleSidebar} style={{border: 'none', background: 'transparent'}}>
        <i className={menuBtnChange()} id="btn"></i>
    </button>
  </div>

  <ul className="nav-list ulAside">

    {
      state.role === "Admin"  &&
      <li>
      <Link to={"/panel"}>
        <i className='bx bx-grid-alt'></i>
        <span className="links_name">Administrar</span>
      </Link>
      <span className="tooltip">Administrar</span>
    </li>

    }
    {
      state.role === "Admin" &&
    <li>
      <Link to={"/register"}>
        <i className='bx bx-group'></i>
        <span className="links_name">Crear Usuarios</span>
      </Link>
      <span className="tooltip">Crear Usuarios</span>
    </li>
    }

{
  state.role === "Operario" && (
    <li>
      <Link to="/permisos">
        <i className="bx bx-check"></i>
        <span className="links_name">Permisos</span>
      </Link>
      <span className="tooltip">Permisos</span>
    </li>
  )
}

  {
    state.role === "Admin" &&
    <li>
      <Link to ={"/archivos"}>
        <i className='bx bx-receipt'></i>
        <span className="links_name">Formularios</span>
      </Link>
      <span className="tooltip">Formularios</span>
    </li>
  }
 
 {
    state.role === "Supervisor" &&
    <li>
      <Link to ={"/archivos"}>
        <i className='bx bx-receipt'></i>
        <span className="links_name">Formularios</span>
      </Link>
      <span className="tooltip">Formularios</span>
    </li>
  }

    {
      state.role === "Operario" && 
      <li>
      <a href={"/notificaciones"}>
        <i className='bi bi-bell'></i>
        {
          notificaciones.filter(n => n.estado === 'Pendiente').length ?
          <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
            {notificaciones.filter(n => n.estado === 'Pendiente').length}
            <span class="visually-hidden">unread messages</span>
          </span>
          : ''
        }
        <span className="links_name">Notificaciones</span>
      </a>
    <span className="tooltip">Notificaciones</span>
  </li>
    }
    {
      state.role === "Admin" &&
      <li>
      <a href={"/dashboard"}>
        <i className='bx bx-bar-chart-alt-2'></i>
        <span className="links_name">Gráficos</span>
      </a>
      <span className="tooltip">Gráficos</span>
    </li>
    }
       {
      state.role === "Supervisor" &&
      <li>
      <a href={"/dashboard"}>
        <i className='bx bx-bar-chart-alt-2'></i>
        <span className="links_name">Gráficos</span>
      </a>
      <span className="tooltip">Gráficos</span>
    </li>
    }
    
    <li>
      <Link to={"/editar"}>
        <i className='bx bx-user'></i>
        <span className="links_name">Mi Perfil</span>
      </Link>
      <span className="tooltip">Mi Perfil</span>
    </li>

  
  </ul>
  
</div>

  )}
  