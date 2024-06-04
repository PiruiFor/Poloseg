import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
    <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
          <img src="./assets/img/icono.png" alt=""/>
          <h1>Poloseg</h1>
      </a>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="#get-started">Secciones</a></li>
          <li><a href="#Information">Información</a></li>
          <li><a href="#Features">Características</a></li>
          <li><a href="#Noticias">Noticias</a></li>
          <li><Link to={'/login'}><span> Iniciar Sesión</span></Link></li> 
        </ul>
      </nav>

    </div>
  </header>
      {/* Hero Section */}
      <section id="hero" className="hero">
        {/* Hero Content */}
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">Bienvenidos a <span>Seguridad e Higiene Industrial</span></h2>
                <p data-aos="fade-up">En nuestro sitio web encontrarás toda la información que necesitas para cumplir con los requisitos de seguridad e higiene industrial.</p>
                <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">¡Empecemos!</a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Carousel */}
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          {/* Carousel Items */}
          <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-1.jpg)' }}></div>
          <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-2.jpg)' }}></div>
          <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-3.jpg)' }}></div>
          <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-4.jpg)' }}></div>
          <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/hero-carousel/hero-carousel-5.jpg)' }}></div>

          {/* Carousel Controls */}
          <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Main Section */}
      <main id="main">
        {/* Constructions Section */}
        <section id="get-started" className="constructions">
          <div className="container" data-aos="fade-up">
            {/* Section Header */}
            <div className="section-header">
              <h2>Secciones varias de Instalaciones y Construcciones</h2>
              <p>Colaboramos con los proyectos de ingeniería y control de instalaciones, poniendo a disposición recursos humanos y técnicos más adecuados a las necesidades de cada situación.</p>
            </div>

            {/* Construction Cards */}
            <div className="row gy-4">
              {/* Card 1 */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg" style={{ backgroundImage: 'url(assets/img/constructions-1.jpg)' }}></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Plataforma Web</h4>
                        <p>Nuestra plataforma web y app móvil fueron desarrolladas con todas las características necesarias para la customización del servicio que se requiera. Cada uno podrá optar por los módulos necesarios para el control de la documentación.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg" style={{ backgroundImage: 'url(assets/img/constructions-2.jpg)' }}></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Seguimiento, controles y formularios</h4>
                        <p>Contará con indicadores de cumplimientos de todas sus empresas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg" style={{ backgroundImage: 'url(assets/img/constructions-3.jpg)' }}></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Gestión de equipos y tareas</h4>
                        <p>Registro de tareas y seguimientos de seguridad e higiene.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg" style={{ backgroundImage: 'url(assets/img/constructions-4.jpg)' }}></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Pautas y Recomendaciones</h4>
                        <p>Contenidos online o presencial sobre seguridad, gestión de equipos y tareas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Constructions Section */}
{/* Sección de Servicios */}
<section id="Information" className="services section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Información</h2>
      <p>En SEGURIDAD & HIGIENE INDUSTRIAL estamos comprometidos con nuestros clientes y te brindamos la mejor experiencia posible.</p>
    </div>
    <div className="row gy-4">
      {/* Servicio 1 */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="fa fa-cloud-download"></i>
          </div>
          <h3>Informes Interactivos</h3>
          <p>Nuestros informes interactivos ofrecen una visión clara y detallada de los datos relevantes para su organización. Puede explorar tendencias, identificar áreas de riesgo y tomar medidas proactivas para mejorar la seguridad en su lugar de trabajo.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-arrow-up-from-ground-water"></i>
              </div>
              <h3>Seguridad Eléctrica</h3>
              <p>Conoce los riesgos eléctricos en el ambiente laboral y cómo prevenirlos. 
                Sabemos la importancia de la seguridad eléctrica en el trabajo, 
                por eso te brindamos información detallada y actualizada para poder tomar 
                las medidas correctas.</p>
              
            </div>
     </div>
     <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa fa-magic"></i>
              </div>
              <h3>Limpieza y Desinfección</h3>
              <p>Un ambiente laboral limpio y desinfectado es vital para garantizar la salud de los trabajadores. 
                Aprende cómo mantener la limpieza y desinfección en el ambiente laboral.</p>
              
            </div>
     </div>
     <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-trowel-bricks"></i>
              </div>
              <h3>Resolución de Conflictos</h3>
              <p>Los conflictos en el lugar de trabajo pueden tener un impacto significativo en la productividad y 
                el bienestar de los empleados. Ya sea un conflicto interpersonal, 
                un desacuerdo entre departamentos o cualquier otro problema.
              </p>
              
            </div>
    </div>
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-helmet-safety"></i>
              </div>
              <h3>Manejo de Maquinaria Pesada</h3>
              <p>Mantén tu ambiente laboral seguro y evita accidentes con información detallada 
                sobre el manejo correcto de la maquinaria pesada.</p>
            
            </div>
    </div>
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa fa-bullhorn"></i>
              </div>
              <h3>Cumplimiento Normativo</h3>
              <p>Nos basamos en el cumplimiento de la legislación vigente, priorizando brindar el mejor soporte y asistencia técnica a nuestros clientes.
                Nuestra misión consiste en diagnosticar de manera precisa la necesidad de cada compañía, priorizando aumentar la calidad de vida de cada trabajador 
              </p>
              
            </div>
    </div>
    </div>
  </div>
</section> {/* FIN Servicios*/}

{/* Sección de Características */}
<section id="Features" className="features section-bg">
  <div className="container" data-aos="fade-up">
  <ul className="nav nav-tabs row  g-2 d-flex">

    <li className="nav-item col-3">
    <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
        <h4>Controles</h4>
    </a>
    </li>

    <li className="nav-item col-3">
    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
        <h4>Monitoreo</h4>
    </a>
    </li>

    <li className="nav-item col-3">
    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
        <h4>Calidad</h4>
    </a>
    </li>

    <li className="nav-item col-3">
    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
        <h4>Documentaciones</h4>
    </a>
    </li>

</ul>
    <div className="tab-content">

      <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                data-aos="fade-up" data-aos-delay="100">
                <h3>Controles</h3>
                <p className="fst-italic">
                Los controles de seguridad e higiene son esenciales para garantizar ambientes saludables y seguros. 
                Implementar protocolos rigurosos ayuda a prevenir riesgos laborales y a mantener la integridad de los espacios.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Nuestra reputación habla por sí misma.</li>
                  <li><i className="bi bi-check2-all"></i> Calidad en todo momento.</li>
                  <li><i className="bi bi-check2-all"></i> Amplio equipo de trabajo, capacitados especialmente con programas de formación profesional.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/features-1.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
        </div>

        <div className="tab-pane" id="tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3> Monitoreo Continuo</h3>
                <p className="fst-italic">
                  Implementamos sistemas de monitoreo avanzados para asegurar que las 
                  medidas de seguridad estén siempre actualizadas. 
                  La vigilancia constante es clave para mantener un entorno de trabajo seguro.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Entorno de trabajo seguro.</li>
                  <li><i className="bi bi-check2-all"></i> Monitoreos avanzados.</li>
                  <li><i className="bi bi-check2-all"></i> Medidas de seguridad actualizadas.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-2.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Compromiso con la Calidad</h3>
                <p className="fst-italic">
                  Nuestro compromiso con la calidad se refleja en cada proyecto que emprendemos. 
                  Cumplimos con los estándares más altos para garantizar la seguridad y la satisfacción del cliente.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Compromiso con la calidad.</li>
                  <li><i className="bi bi-check2-all"></i> Satisfacción de nuestros clientes. </li>
                  <li><i className="bi bi-check2-all"></i> Cumplimiento de los estándares mas altos</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-3.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-4">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Documentaciones cualitativas</h3>
                <p className="fst-italic">
                  Documentar las encuestas demográficas cualitativas de higiene industrial 
                  con información sobre exposición/control; priorizar el seguimiento y la supervisión.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Realizar evaluaciones móviles de factores de higiene industrial.</li>
                  <li><i className="bi bi-check2-all"></i> Seguimiento confidencial y controles discretos de acceso de los usuarios.</li>
                  <li><i className="bi bi-check2-all"></i> Realizar un análisis de la causa raíz de los incidentes de lesiones y enfermedades para mitigar futuras incidencias.</li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-4.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>


      </div>
    </div>
  </section> {/* End Features Section  */}
{/* End Get Started Section */}

      <section id="Noticias" className="recent-blog-posts">
      <div className="container" data-aos="fade-up">
       <div className="section-header">
        <h2>Noticias Recientes</h2>
        <p>En las últimas noticias de seguridad e higiene, se destaca la implementación de medidas innovadoras para mantener entornos seguros, como tecnologías de desinfección avanzada y protocolos mejorados en espacios públicos.</p>
      </div>

      <div className="row gy-5">

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="post-item position-relative h-100">

            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/Noticias/noticia1.png" className="img-fluid" alt=""/>
              <span className="post-date">20/11/2023</span>
            </div>

            <div className="post-content d-flex flex-column">

              <h3 className="post-title">La precariedad laboral mata</h3>

              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-person"></i> <span className="ps-2">El País</span>
                </div>
                <span className="px-3 text-black-50">/</span>
                <div className="d-flex align-items-center">
                  <i className="bi bi-folder2"></i> <span className="ps-2">Seguridad Laboral</span>
                </div>
              </div>

              <hr/>

              <a href="https://elpais.com/opinion/2023-11-20/la-precariedad-laboral-mata.html" className="readmore stretched-link">Leer Noticia<i
                  className="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>

        <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="post-item position-relative h-100">

            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/Noticias/noticia2.png" className="img-fluid" alt=""/>
              <span className="post-date">17/11/2023</span>
            </div>

            <div className="post-content d-flex flex-column">

              <h3 className="post-title">Más seguridad en el trabajo: las muertes caen un 16% respecto al año pasado</h3>

              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-person"></i> <span className="ps-2">PACO PUENTES</span>
                </div>
                <span className="px-3 text-black-50">/</span>
                <div className="d-flex align-items-center">
                  <i className="bi bi-folder2"></i> <span className="ps-2">Accidentes Laborales</span>
                </div>
              </div>

              <hr/>

              <a href="https://elpais.com/economia/2023-11-17/mas-seguridad-en-el-trabajo-las-muertes-caen-un-16-respecto-al-ano-pasado.html" className="readmore stretched-link">Leer Noticia<i
                  className="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="300">

            <div className="post-img position-relative overflow-hidden">
              <img src="assets/img/Noticias/noticia3.png" className="img-fluid" alt=""/>
              <span className="post-date">28/09/2023</span>
            </div>

            <div className="post-content d-flex flex-column">

              <h3 className="post-title">Trabajadores desprotegidos, playas contaminadas y leyes arrinconadas</h3>

              <div className="meta d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <i className="bi bi-person"></i> <span className="ps-2">ANUKTA</span>
                </div>
                <span className="px-3 text-black-50">/</span>
                <div className="d-flex align-items-center">
                  <i className="bi bi-folder2"></i> <span className="ps-2">Materiales de Trabajo</span>
                </div>
              </div>

              <hr/>

              <a href="https://elpais.com/planeta-futuro/2023-09-28/trabajadores-desprotegidos-playas-contaminadas-y-leyes-arrinconadas-el-rentable-negocio-de-desguazar-barcos-en-banglades.html" className="readmore stretched-link">Leer Noticia<i
                  className="bi bi-arrow-right"></i></a>

            </div>

          </div>
        </div>

      </div>

      </div>
    </section>   {/* End Recent Blog Posts Section */}

      </main>    {/* End #main */}

      <footer id="footer" className="footer">
      <div className="footer-content position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <img src="./assets/img/icono.png" height="40" width="40" alt="Logo" />
                  <h1>Poloseg</h1>
                </a>
                <p>
                  (3600) Formosa, Argentina: <br />
                  Avenida 25 de Mayo 3500<br /><br />
                  <strong>Teléfono:</strong> +0370 4 15 4464908<br />
                  <strong>Email:</strong> seghyg@hotmail.com<br />
                </p>
                <div className="social-links d-flex mt-3">
                  <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

 {/*          <div className="col-lg-2 col-md-3 footer-links">
              <h4>Enlaces a convenir</h4>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Términos</a></li>
                <li><a href="#">Privacidad</a></li>
              </ul>
            </div>

           <div className="col-lg-2 col-md-3 footer-links">
              <h4>Otros Servicios</h4>
              <ul>
                <li><a href="#">Evaluación de Ergonomía</a></li>
                <li><a href="#">Control de Sustancias Peligrosas</a></li>
                <li><a href="#">Auditorías de Cumplimiento Normativo</a></li>
                <li><a href="#">Gestión de Residuos Industriales</a></li>
                <li><a href="#">Emergencias y Evacuación</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Soluciones Eficientes</h4>
              <ul>
                <li><a href="#">Monitoreo Avanzado</a></li>
                <li><a href="#">Entrenamiento Continuo en Seguridad</a></li>
                <li><a href="#">Sistemas de Gestión de Riesgos </a></li>
                <li><a href="#">Prácticas Ergonómicas</a></li>
                <li><a href="#">Protocolos de Higiene Rigurosos </a></li>
              </ul>
            </div> */}

          </div>
        </div>
      </div>

      <div className="footer-legal text-center position-relative">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Poloseg</span></strong>. Todos los derechos reservados.
          </div>
          <div className="credits">
            Agencia Seguridad e Higiene <a href="#">POLOSEG</a>
          </div>
        </div>
      </div>
    </footer>


    </>
  );
};

