Integrantes:
Durante Lautaro
Paniagua Nahuel
Veron Leandro

Proyecto: 
El objetivo general es desarrollar un software integral de gestión de seguridad e higiene en el rubro industrial para empresas de diversos sectores. 
Este software permitirá cumplir con las normativas legales y mejorar la seguridad y la salud de los trabajadores. 
Los objetivos específicos se centran en proporcionar herramientas para la gestión de riesgos, incidentes, inspecciones, capacitación, comunicación, 
cumplimiento normativo y generación de informes. Los usuarios incluyen gerentes, supervisores, trabajadores y profesionales encargados de la seguridad y la higiene laboral.


Objetivo General:
Desarrollar e implementar un software de gestión de seguridad e higiene en el rubro industrial que contribuya a mejorar la seguridad y la salud de los trabajadores,
así como a garantizar el cumplimiento de las normativas legales en entornos industriales.

Objetivos Específicos:
Identificar y analizar las necesidades y requisitos específicos de seguridad e higiene laboral de las empresas industriales, incluyendo sectores como manufactura, petróleo y gas, minería y construcción.
Diseñar y desarrollar un software que integre las siguientes características:
a. Gestión de riesgos: Permitir la identificación, evaluación y gestión de los riesgos laborales asociados a cada tarea o actividad industrial.
b. Gestión de incidentes: Facilitar el registro y seguimiento de incidentes, accidentes y lesiones laborales, con herramientas para acciones de corrección y prevención.
c. Planificación y seguimiento de inspecciones: Posibilitar la programación y ejecución de inspecciones en el lugar de trabajo para detectar y abordar riesgos laborales.
d. Capacitación: Mantener un registro de la capacitación del personal en seguridad e higiene y programar sesiones de capacitación necesarias.
e. Comunicación: Facilitar la comunicación eficiente entre empleados y la gestión en temas relacionados con seguridad y salud laboral.
f. Cumplimiento normativo: Ayudar a asegurar que la empresa cumpla con las regulaciones legales vigentes en materia de seguridad e higiene laboral.
g. Reportes y análisis: Permitir la generación de informes y análisis  para evaluar y mejorar la gestión de seguridad y salud laboral.

Adaptar el software a las necesidades específicas de cada tipo de industria, garantizando su versatilidad y capacidad de personalización.

Roles de Usuario:
Inspector de Seguridad: es el encargado de identificar, informar y brindar soluciones a los riesgos laborales en el lugar de trabajo ;
Supervisor del Sistema: es el encargado de programar sesiones de capacitación y garantizar que todos los trabajadores estén debidamente capacitados;
Gerente de Cumplimientos: es el encargado de que el software proporcione notificaciones a todos los usuarios sobre los cambios y/o actulizaciones de normas.;
Super Admin: es el encargado de garantizar un acceso adecuado a las funciones y módulos del sistema. Define los roles de usuario permitidos. ;


Funcionalidades de Aplicación WEB:
*El super administrador tendrá acceso a un panel de control donde podrá generar y eliminar usuarios, con sus respectivos roles. A pesar de su privilegio, no posee permisos para intervenir
en las distintas tareas de los encargados de las áreas.

*Se podrá generar cambios, actualizaciones o comentarios de los formularios de carga de los distintos inspectores.

*Se tendrá presente un sistema de notificaciones activas para los usuarios donde se les avisará sobre los cambios de normas legales.

*Los trabajadores rellenan los formularios pertinentes para poder realizar sus tareas, con una hora estimada para llevarlo a cabo.



# Proyecto con React, JavaScript, TypeScript, CSS y Conexión a Bases de Datos SQL y MongoDB

Este repositorio contiene un proyecto web desarrollado utilizando tecnologías como React, JavaScript, TypeScript, CSS, y además, integra la conexión con bases de datos tanto SQL como MongoDB. El proyecto combina estas tecnologías para crear una aplicación web moderna y escalable.

## Características

- **Tecnologías Frontend:** El proyecto utiliza React como librería principal para construir la interfaz de usuario. Se emplea JavaScript y TypeScript para la lógica y tipado seguro respectivamente. El diseño y estilo se controlan mediante CSS.

- **Conexión a Bases de Datos:** La aplicación demuestra la capacidad de conectarse a diferentes tipos de bases de datos. Utiliza una base de datos SQL para almacenar ciertos tipos de datos relacionales y MongoDB para almacenar datos no estructurados.

## Requisitos Previos

Antes de comenzar con este proyecto, asegúrate de tener instalados:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- npm (Administrador de paquetes de Node.js): Esto viene incluido con Node.js, así que no necesitas instalarlo por separado.
- Base de datos SQL (por ejemplo, MySQL, PostgreSQL)
- Base de datos MongoDB: [Instrucciones de instalación](https://docs.mongodb.com/manual/administration/install-community/)

## Configuración

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tuusuario/nombre-del-repo.git
```

2. Instala las dependencias del proyecto:

```bash
cd nombre-del-repo
npm install
```

3. Configuración de las bases de datos:

   - **SQL:** Configura la conexión a tu base de datos SQL en el archivo `sql-config.js` ubicado en la carpeta `src/server`. Asegúrate de tener las credenciales correctas y la base de datos creada.
   
   - **MongoDB:** Configura la conexión a tu base de datos MongoDB en el archivo `mongodb-config.js` ubicado en la carpeta `src/server`.

4. Inicia el servidor:

```bash
npm run server
```

5. Inicia la aplicación frontend:

```bash
npm start
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores o mejoras, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
