import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  if (location.pathname === '/login') {
    return (
      <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src="/assets/img/icono.png" height='30' width='30'/>
          <span className="fs-4" style={{color: 'blue'}}>Poloseg</span>
        </a>
  
        <ul className="nav nav-pills">
          
          <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
         
        </ul>
      </header>
    </div>
    );
  }


  if (location.pathname === '/') {
    return (
      <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src="/img/icono.png" height='30' width='30'/>
          <span className="fs-4">Poloseg</span>
        </a>
  
        <ul className="nav nav-pills">
          
          <li className="nav-item"><a href="#" className="nav-link">Servicios</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Secciones</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Nosotros</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contacto</a></li>
          <li className="nav-item"><a href="/login" className="nav-link active">Inicia Aquí</a></li>

        </ul>
      </header>
    </div>
    );
  }

  return null; // Por si la ruta no coincide con ninguna de las anteriores

};

