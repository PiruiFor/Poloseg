import Swal from "sweetalert2"
import { useState } from "react";

export const Medidas = ({onGuardadoChange, onCheckboxesChange}) => {
  
    const [guardado, setGuardado] = useState(false);
    /* const [checkboxValues, setCheckboxValues] = useState({}); */
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

     /*  const checkboxes = Array.from({ length: 36 }, (_, index) => index + 1); */

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
          console.log('Guardando correctamente Medidas');
          await Swal.fire({
            title: 'Guardado correctamente',
            icon: 'success'
          })

          disabledTable();
          setGuardado(true);
          onGuardadoChange(true);
          onCheckboxesChange(checkboxesSeleccionados)

        } catch (error) {
          await Swal.fire({
            title: 'No se pudo enviar',
            icon: 'error'
          })
          console.error('Error al enviar el formulario', error);
        }
      };
    
  return (
    <div>
    <table className="table table-striped table-sm" aria-disabled={!tableEnabled} style={tableStyle}>
    <thead>
         <tr>
          <th colSpan={6} style={{background: '#32CD32'}}>Medidas de control y mitigación</th>
         </tr>
    </thead>
    <tbody>
      
        <tr>
        {/* <td>{checkboxes.map((checkbox) => (<div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues[`checkbox${checkbox}`] || false}  onChange={() => handleCheckboxChange(`checkbox${checkbox}`)} /> A- Ojos y mente en tarea</div> ))}</td> */}
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1}  onChange={() => handleCheckboxChange('checkbox1')} /> A- Ojos y mente en tarea</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2} onChange={() => handleCheckboxChange('checkbox2')} /> K- Señalización/delimitación</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3} onChange={() => handleCheckboxChange('checkbox3')} /> T- Luces Encendidas</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4} onChange={() => handleCheckboxChange('checkbox4')} /> AD- Kit antiderrame</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5} onChange={() => handleCheckboxChange('checkbox5')} /> B- Persona Guía</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6} onChange={() => handleCheckboxChange('checkbox6')} /> L- Puesta a Tierra</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7} onChange={() => handleCheckboxChange('checkbox7')} /> U- Uso de cinturón de seguridad</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8} onChange={() => handleCheckboxChange('checkbox8')} /> AE- Sujeción andamios - Carga - Otros</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9} onChange={() => handleCheckboxChange('checkbox9')} /> C- Movimiento lento y continuo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10} onChange={() => handleCheckboxChange('checkbox10')} /> LL- Desenergización</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11} onChange={() => handleCheckboxChange('checkbox11')} /> V- Colocación de chapa ciega</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12} onChange={() => handleCheckboxChange('checkbox12')} /> AF- Estabilización de carga</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13} onChange={() => handleCheckboxChange('checkbox13')} /> D- Inspección visual previa</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14} onChange={() => handleCheckboxChange('checkbox14')} /> M- Desprezurización</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15} onChange={() => handleCheckboxChange('checkbox15')} /> W- Comunicación permanente</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16} onChange={() => handleCheckboxChange('checkbox16')} /> AG- Coordinación de movimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17} onChange={() => handleCheckboxChange('checkbox17')} /> E- Monitoreo de Gases</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18} onChange={() => handleCheckboxChange('checkbox18')} /> N- Orden y Limpieza</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19} onChange={() => handleCheckboxChange('checkbox19')} /> X- Descanzo intermedio</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20} onChange={() => handleCheckboxChange('checkbox20')} /> AH- Personal capacitado</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21} onChange={() => handleCheckboxChange('checkbox21')} /> F- Manejo defensivo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22} onChange={() => handleCheckboxChange('checkbox22')} /> Ñ- Talud/apuntalamiento</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23} onChange={() => handleCheckboxChange('checkbox23')} /> Y- Hidratación</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24} onChange={() => handleCheckboxChange('checkbox24')} /> AI- Otros/No Especificado</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25} onChange={() => handleCheckboxChange('checkbox25')} /> G- Uso de EPP</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26} onChange={() => handleCheckboxChange('checkbox26')} /> O- Sistema contracaída</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27} onChange={() => handleCheckboxChange('checkbox27')} /> Z- Rotación del personal</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28} onChange={() => handleCheckboxChange('checkbox28')} /> H- Extintor</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29} onChange={() => handleCheckboxChange('checkbox29')} /> P- Hojas de seguridad</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30} onChange={() => handleCheckboxChange('checkbox30')} /> AA- Elemento de izaje en condición</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31} onChange={() => handleCheckboxChange('checkbox31')} /> I- Supervisión</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox32} onChange={() => handleCheckboxChange('checkbox32')} /> Q- Soga Guía</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox33} onChange={() => handleCheckboxChange('checkbox33')} /> AB- Herramienta en condición</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox34} onChange={() => handleCheckboxChange('checkbox34')} /> J- Bloqueo y etiquetado</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox35} onChange={() => handleCheckboxChange('checkbox35')} /> R- Respetar velocidades</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox36} onChange={() => handleCheckboxChange('checkbox36')} /> AC- Botiquín P.A</div></td>
            <td></td>
        </tr>
    </tbody>
  </table>
  <div className="botonesGrupo">
   <button onClick={guardarFormulario} className="btn btn-success">Guardar</button>
  </div>
    </div>
  )
}

