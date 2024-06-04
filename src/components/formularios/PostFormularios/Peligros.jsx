import { useState } from "react";
import Swal from "sweetalert2"

export const Peligros = ({onGuardadoChange, onCheckboxesChange}) => {
    const [guardado, setGuardado] = useState(false);
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

      const handleCheckboxChange = (name) => {
        setCheckboxValues({
          ...checkboxValues,
          [name]: !checkboxValues[name],
        });
      };

      const checkboxesSeleccionados = Object.keys(checkboxValues)
      .filter((key) => checkboxValues[key])
      .reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});

      const [tableEnabled, setTableEnabled] = useState(true);
      const disabledTable = () => {
            setTableEnabled(false);
      };
      
      const tableStyle = {
        opacity: tableEnabled ? 1 : 0.5,
        cursor: tableEnabled ? "auto" : "not-allowed",
        width: 1000,
      };
  const guardarFormulario = async () => {
    try {
      console.log('Valores true', checkboxesSeleccionados);
      console.log('Enviado correctamente Peligros');
      Swal.fire({
        title: 'Enviado correctamente ',
        icon: 'success'
      })
        disabledTable();
        setGuardado(true);
        onGuardadoChange(true);
        onCheckboxesChange(checkboxesSeleccionados)

    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };
 
  return (
    <div>
    <table className="table table-striped table-sm" aria-disabled={!tableEnabled} style={tableStyle}>
        <thead>
        <tr>
        <th colSpan={6} style={{background: 'red'}}>Peligros</th>
       </tr>
        </thead>
   
    <tbody>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1} onChange={() => handleCheckboxChange('checkbox1')}/> 1- Animales ponzoñosos/venenosos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2} onChange={() => handleCheckboxChange('checkbox2')}/> 15- Mala iluminacion </div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3} onChange={() => handleCheckboxChange('checkbox3')}/> 29- Sustancias toxicas</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4} onChange={() => handleCheckboxChange('checkbox4')} /> 2- Hidrocarburo/combustible</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5} onChange={() => handleCheckboxChange('checkbox5')}/> 16- Objetos/equipos caidos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6} onChange={() => handleCheckboxChange('checkbox6')} /> 30- Liquidos inflamables</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7} onChange={() => handleCheckboxChange('checkbox7')} /> 3- Sustancia corrosivas</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8} onChange={() => handleCheckboxChange('checkbox8')} /> 17- Liberacion/derrame</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9} onChange={() => handleCheckboxChange('checkbox9')} /> 31- Herramientas electricas/manuales/neumatica</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10} onChange={() => handleCheckboxChange('checkbox10')} /> 4- Superficie fría/caliente</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11} onChange={() => handleCheckboxChange('checkbox11')} /> 18- Agentes biologicos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12} onChange={() => handleCheckboxChange('checkbox12')} /> 32- Equipo/Material pesado</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13} onChange={() => handleCheckboxChange('checkbox13')} /> 5- Comunicación restringida</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14} onChange={() => handleCheckboxChange('checkbox14')} /> 19- Equipos/instalaciones a Presión</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15} onChange={() => handleCheckboxChange('checkbox15')} /> 33- Empleado nuevo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16} onChange={() => handleCheckboxChange('checkbox16')} /> 6- Espacio confinado</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17} onChange={() => handleCheckboxChange('checkbox17')} /> 20- Radiacion </div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18} onChange={() => handleCheckboxChange('checkbox18')} /> 34- Personal nuevo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19} onChange={() => handleCheckboxChange('checkbox19')} /> 7- Espacio restringido</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20} onChange={() => handleCheckboxChange('checkbox20')} /> 21- Vision Restringida</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21} onChange={() => handleCheckboxChange('checkbox21')} /> 35- Tarea Nueva/Desconocida</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22} onChange={() => handleCheckboxChange('checkbox22')} /> 8- Equipos eléctricos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23} onChange={() => handleCheckboxChange('checkbox23')} /> 22- Peatones</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24} onChange={() => handleCheckboxChange('checkbox24')} /> 36- Polvo</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25} onChange={() => handleCheckboxChange('checkbox25')} /> 9- Animales sueltos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26} onChange={() => handleCheckboxChange('checkbox26')} /> 23- Circulación Vehicular</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27} onChange={() => handleCheckboxChange('checkbox27')} /> 37- Terreno inestable</div></td>
            </tr>
            <tr>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28} onChange={() => handleCheckboxChange('checkbox28')} /> 10- Sustancia Asfixiante (gases-vapores)</div></td>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29} onChange={() => handleCheckboxChange('checkbox29')} /> 24- Ruido</div></td>
              <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30} onChange={() => handleCheckboxChange('checkbox30')} /> 38- Terreno con Pendiente</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31} onChange={() => handleCheckboxChange('checkbox31')} /> 11- Trabajo en altura</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox32} onChange={() => handleCheckboxChange('checkbox32')} /> 25- Explosivos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox33} onChange={() => handleCheckboxChange('checkbox33')} /> 39- Escaleras</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox34} onChange={() => handleCheckboxChange('checkbox34')} /> 12- H2S</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox35} onChange={() => handleCheckboxChange('checkbox35')} /> 26- Camino polvoriento</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox36} onChange={() => handleCheckboxChange('checkbox36')} /> 40- Elemento saliente</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox37} onChange={() => handleCheckboxChange('checkbox37')} /> 13- Equipo/Maquinaria de carga</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox38} onChange={() => handleCheckboxChange('checkbox38')} /> 27- Sol/Lluvia/Granizo/Viento</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox39} onChange={() => handleCheckboxChange('checkbox39')} /> 41- Otro</div></td>
            </tr>
            <tr>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox40} onChange={() => handleCheckboxChange('checkbox40')} /> 14- Objetos en movimientos</div></td>
                <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox41} onChange={() => handleCheckboxChange('checkbox41')} /> 28- Superficies Resbaladizas</div></td>
                <td></td>
            </tr>

    </tbody>
    </table>
    <div className="botonesGrupo">
      <button onClick={guardarFormulario} className="btn btn-danger">Guardar</button>
    </div>
    </div>
  )
}

