import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'

export const GetMedidas = () => {
  const location = useLocation();
  const { id, idNotificacion } = useParams()
  
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
        checkbox36: false
      });

      const traerForm = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/formularios/${id}`);
          if (response.status === 200) {
            // Filtrar los formularios de Protección y establecer los valores de los checkboxes
            const formulariosMedidas = response.data.medidas;
            setCheckboxValues(formulariosMedidas);
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

  if(location.pathname === `/formularios/${id}` || location.pathname === `/notificaciones/${id}/${idNotificacion}`) {
  return (
    
    <div>
          <table className="table table-striped table-sm" style={tableStyle}>
    <thead>
         <tr>
          <th colSpan={6} style={{background: '#32CD32'}}>Medidas de control y mitigación</th>
         </tr>
    </thead>
    <tbody>
      
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1}/> A- Ojos y mente en tarea</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2}/> K- Señalización/delimitación</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3}/> T- Luces Encendidas</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4}/> AD- Kit antiderrame</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5}/> B- Persona Guía</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6}/> L- Puesta a Tierra</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}/> U- Uso de cinturón de seguridad</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}/> AE- Sujeción andamios - Carga - Otros</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}/> C- Movimiento lento y continuo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10}/> LL- Desenergización</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11}/> V- Colocación de chapa ciega</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12}/> AF- Estabilización de carga</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13}/> D- Inspección visual previa</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14}/> M- Desprezurización</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15}/> W- Comunicación permanente</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16}/> AG- Coordinación de movimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17}/> E- Monitoreo de Gases</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18}/> N- Orden y Limpieza</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19}/> X- Descanzo intermedio</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20}/> AH- Personal capacitado</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21}/> F- Manejo defensivo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22}/> Ñ- Talud/apuntalamiento</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23}/> Y- Hidratación</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24}/> AI- Otros/No Especificado</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25}/> G- Uso de EPP</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26}/> O- Sistema contracaída</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27}/> Z- Rotación del personal</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28}/> H- Extintor</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29}/> P- Hojas de seguridad</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30}/> AA- Elemento de izaje en condición</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31}/> I- Supervisión</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox32}/> Q- Soga Guía</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox33}/> AB- Herramienta en condición</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox34}/> J- Bloqueo y etiquetado</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox35}/> R- Respetar velocidades</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox36}/> AC- Botiquín P.A</div></td>
            <td></td>
        </tr>
    </tbody>
  </table>
    </div>
  )
}
if(location.pathname === `/archivos/${id}`) {
  return (
    
    <div>
          <table className="table-sm" style={tableStyle2}>
    <thead>
         <tr>
          <th colSpan={6} style={{background: '#32CD32'}}>Medidas de control y mitigación</th>
         </tr>
    </thead>
    <tbody>
      
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1}/> A- Ojos y mente en tarea</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2}/> K- Señalización/delimitación</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3}/> T- Luces Encendidas</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4}/> AD- Kit antiderrame</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5}/> B- Persona Guía</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6}/> L- Puesta a Tierra</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}/> U- Uso de cinturón de seguridad</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}/> AE- Sujeción andamios - Carga - Otros</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}/> C- Movimiento lento y continuo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10}/> LL- Desenergización</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11}/> V- Colocación de chapa ciega</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12}/> AF- Estabilización de carga</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13}/> D- Inspección visual previa</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14}/> M- Desprezurización</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15}/> W- Comunicación permanente</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16}/> AG- Coordinación de movimiento</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17}/> E- Monitoreo de Gases</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18}/> N- Orden y Limpieza</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19}/> X- Descanzo intermedio</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20}/> AH- Personal capacitado</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21}/> F- Manejo defensivo</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22}/> Ñ- Talud/apuntalamiento</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23}/> Y- Hidratación</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24}/> AI- Otros/No Especificado</div></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25}/> G- Uso de EPP</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26}/> O- Sistema contracaída</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27}/> Z- Rotación del personal</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28}/> H- Extintor</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29}/> P- Hojas de seguridad</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30}/> AA- Elemento de izaje en condición</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31}/> I- Supervisión</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox32}/> Q- Soga Guía</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox33}/> AB- Herramienta en condición</div></td>
            <td></td>
        </tr>
        <tr>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox34}/> J- Bloqueo y etiquetado</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox35}/> R- Respetar velocidades</div></td>
            <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox36}/> AC- Botiquín P.A</div></td>
            <td></td>
        </tr>
    </tbody>
  </table>
    </div>
  )
}
}

