import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom';

export const GetPeligros = () => {
  const {id, idNotificacion} = useParams()
  const location = useLocation();
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
        checkbox12: false,
        checkbox13: false,
        checkbox14: false,
        checkbox15: false,
        checkbox16: false,
        checkbox17: false,
        checkbox18: false,
        checkbox19: false,
        checkbox20: false,
        checkbox21: false,
        checkbox22: false,
        checkbox23: false,
        checkbox24: false,
        checkbox25: false,
        checkbox26: false,
        checkbox27: false,
        checkbox28: false,
        checkbox29: false,
        checkbox30: false,
        checkbox31: false,
        checkbox32: false,
        checkbox33: false,
        checkbox34: false,
        checkbox35: false,
        checkbox36: false,
        checkbox37: false,
        checkbox38: false,
        checkbox39: false,
        checkbox40: false,
        checkbox41: false
      });
    
      const traerForm = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/formularios/${id}`);
          if (response.status === 200) {
            // Filtrar los formularios de Protección y establecer los valores de los checkboxes
            const formulariosPeligros = response.data.peligros;
            setCheckboxValues(formulariosPeligros);
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

      const tableStyle2 = {
        opacity: 0.7,
        cursor: "not-allowed",
        marginBottom: 20
      };

  if(location.pathname === `/formularios/${id}` || location.pathname === `/notificaciones/${id}/${idNotificacion}`){
  return (
    <div>
          <table className="table table-striped table-sm" style={tableStyle}>
        <thead>
        <tr>
        <th colSpan={6} style={{background: 'red'}}>Peligros</th>
       </tr>
        </thead>
   
    <tbody>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1}/> 1- Animales ponzoñosos/venenosos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2}/> 15- Mala iluminacion </div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3}/> 29- Sustancias toxicas</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4}/> 2- Hidrocarburo/combustible</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5}/> 16- Objetos/equipos caidos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6}/> 30- Liquidos inflamables</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}/> 3- Sustancia corrosivas</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}/> 17- Liberacion/derrame</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}/> 31- Herramientas electricas/manuales/neumatica</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10}/> 4- Superficie fría/caliente</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11}/> 18- Agentes biologicos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12}/> 32- Equipo/Material pesado</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13}/> 5- Comunicación restringida</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14}/> 19- Equipos/instalaciones a Presión</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15}/> 33- Empleado nuevo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16}/> 6- Espacio confinado</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17}/> 20- Radiacion </div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18}/> 34- Personal nuevo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19}/> 7- Espacio restringido</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20}/> 21- Vision Restringida</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21}/> 35- Tarea Nueva/Desconocida</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22}/> 8- Equipos eléctricos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23}/> 22- Peatones</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24}/> 36- Polvo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25}/> 9- Animales sueltos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26}/> 23- Circulación Vehicular</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27}/> 37- Terreno inestable</div></td>
            </tr>
            <tr>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28}/> 10- Sustancia Asfixiante (gases-vapores)</div></td>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29}/> 24- Ruido</div></td>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30}/> 38- Terreno con Pendiente</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31}/> 11- Trabajo en altura</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox32}/> 25- Explosivos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox33}/> 39- Escaleras</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox34}/> 12- H2S</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox35}/> 26- Camino polvoriento</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox36}/> 40- Elemento saliente</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox37}/> 13- Equipo/Maquinaria de carga</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox38}/> 27- Sol/Lluvia/Granizo/Viento</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox39}/> 41- Otro</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox40}/> 14- Objetos en movimientos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox41}/> 28- Superficies Resbaladizas</div></td>
                <td></td>
            </tr>

    </tbody>
    </table>
    </div>
  )
}
if(location.pathname === `/archivos/${id}`){
  return (
    <div>
          <table className="table table-striped table-sm" style={tableStyle2}>
        <thead>
        <tr>
        <th colSpan={6} style={{background: 'red'}}>Peligros</th>
       </tr>
        </thead>
   
    <tbody>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1}/> 1- Animales ponzoñosos/venenosos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2}/> 15- Mala iluminacion </div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3}/> 29- Sustancias toxicas</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4}/> 2- Hidrocarburo/combustible</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5}/> 16- Objetos/equipos caidos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6}/> 30- Liquidos inflamables</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}/> 3- Sustancia corrosivas</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}/> 17- Liberacion/derrame</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}/> 31- Herramientas electricas/manuales/neumatica</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10}/> 4- Superficie fría/caliente</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11}/> 18- Agentes biologicos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12}/> 32- Equipo/Material pesado</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13}/> 5- Comunicación restringida</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14}/> 19- Equipos/instalaciones a Presión</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15}/> 33- Empleado nuevo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16}/> 6- Espacio confinado</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17}/> 20- Radiacion </div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18}/> 34- Personal nuevo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19}/> 7- Espacio restringido</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20}/> 21- Vision Restringida</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21}/> 35- Tarea Nueva/Desconocida</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22}/> 8- Equipos eléctricos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23}/> 22- Peatones</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24}/> 36- Polvo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25}/> 9- Animales sueltos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26}/> 23- Circulación Vehicular</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27}/> 37- Terreno inestable</div></td>
            </tr>
            <tr>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28}/> 10- Sustancia Asfixiante (gases-vapores)</div></td>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29}/> 24- Ruido</div></td>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30}/> 38- Terreno con Pendiente</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31}/> 11- Trabajo en altura</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox32}/> 25- Explosivos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox33}/> 39- Escaleras</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox34}/> 12- H2S</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox35}/> 26- Camino polvoriento</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox36}/> 40- Elemento saliente</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox37}/> 13- Equipo/Maquinaria de carga</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox38}/> 27- Sol/Lluvia/Granizo/Viento</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox39}/> 41- Otro</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox40}/> 14- Objetos en movimientos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox41}/> 28- Superficies Resbaladizas</div></td>
                <td></td>
            </tr>

    </tbody>
    </table>
    </div>
  )
}
}

