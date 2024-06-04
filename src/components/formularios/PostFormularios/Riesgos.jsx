import { useState } from "react";
import Swal from "sweetalert2"

export const Riesgos = ({onGuardadoChange, onCheckboxesChange}) => {
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
        checkbox27: false
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
          console.log('Enviado correctamente Riesgos');
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
        <th colSpan={6} style={{background: '#FFD700'}}>Riesgos y consecuencias</th>
       </tr>
        </thead>
   
    <tbody>
    <tr>
    <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1} onChange={() => handleCheckboxChange('checkbox1')} /> A- Atrapado en</div></td>
    <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2} onChange={() => handleCheckboxChange('checkbox2')} /> N- Caida de objetos por desplome o desprendimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3} onChange={() => handleCheckboxChange('checkbox3')} /> B- Atrapado entre</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4} onChange={() => handleCheckboxChange('checkbox4')} /> O- Atrapamiento por vuelco de maquinarias</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5} onChange={() => handleCheckboxChange('checkbox5')} /> C- Atrapado bajo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6} onChange={() => handleCheckboxChange('checkbox6')} /> P- Atropellos, golpes, choques contra o con vehiculos</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7} onChange={() => handleCheckboxChange('checkbox7')} /> D- Corte/punciones/laceraciones</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8} onChange={() => handleCheckboxChange('checkbox8')} /> Q- Accidentes en vehiculos terrestres</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9} onChange={() => handleCheckboxChange('checkbox9')} /> E- Exposicion Calor/Frio (carga termica) </div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10} onChange={() => handleCheckboxChange('checkbox10')} /> R- Hundimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11} onChange={() => handleCheckboxChange('checkbox11')} /> F- Caida de objetos por manipulacion</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12} onChange={() => handleCheckboxChange('checkbox12')} /> S- Descarga electrica</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13} onChange={() => handleCheckboxChange('checkbox13')} /> G- Ignicion</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14} onChange={() => handleCheckboxChange('checkbox14')} /> T- Resbalon/tropiezo/caida</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15} onChange={() => handleCheckboxChange('checkbox15')} /> H- Sobreesfuerzo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16} onChange={() => handleCheckboxChange('checkbox16')} /> U- Picadura y/o mordeduras de animales e insectos</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17} onChange={() => handleCheckboxChange('checkbox17')} /> I- Golpeado por</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18} onChange={() => handleCheckboxChange('checkbox18')} /> V- Quemaduras</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19} onChange={() => handleCheckboxChange('checkbox19')} /> J- Golpe contra</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20} onChange={() => handleCheckboxChange('checkbox20')} /> W- Explosion/incendio</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21} onChange={() => handleCheckboxChange('checkbox21')} /> K- Proyeccion de particulas/salpicaduras</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22} onChange={() => handleCheckboxChange('checkbox22')} /> X- Asfixia/Desmayo</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23} onChange={() => handleCheckboxChange('checkbox23')} /> L- Caida de personas a mismo nivel</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24} onChange={() => handleCheckboxChange('checkbox24')} /> Y-Problemas respiratorios</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25} onChange={() => handleCheckboxChange('checkbox25')} /> LL- Caida de personas a distinto nivel</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26} onChange={() => handleCheckboxChange('checkbox26')} /> Z- Otro</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27} onChange={() => handleCheckboxChange('checkbox27')} /> M- Caida a instalaciones de bajo nivel</div></td>
            <td></td>
        </tr>

    </tbody>
    </table>
  <div className="botonesGrupo">
   <button onClick={guardarFormulario} className="btn btn-warning">Guardar</button>
  </div>
    </div>
  )
}


