import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export const GetProteccion = () => {
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
    checkbox31: false
  });

  const traerForm = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/formularios/${id}`);
      if (response.status === 200) {
        // Filtrar los formularios de Protección y establecer los valores de los checkboxes
        const formulariosProteccion = response.data.proteccion;
        setCheckboxValues(formulariosProteccion);
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
    marginBottom: 20,
    marginTop: 20,
    fontSize: 8.8
  };

  if(location.pathname=== `/formularios/${id}` || location.pathname === `/notificaciones/${id}/${idNotificacion}`){
  return (
    <div>
    <table className="table table-striped table-sm" style={tableStyle}>
    <thead>
        <tr>
            <th colSpan={6} style={{background: 'skyblue'}}>Elementos de Protección Personal</th>
        </tr>
      <tr>
        <th style={{background: 'skyblue'}} scope="col">Protección de Cabeza y Cuerpo</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Ojos y Cara</th>
        <th style={{background: 'skyblue'}} scope="col">Protección Auditiva</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Manos</th>
        <th style={{background: 'skyblue'}} scope="col">Protección Respiratoria</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Pies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1} /> Casco de Seguridad</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2} /> Gafas de seguridad</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3} /> Protectores de copa</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4} /> Guante de Vaqueta</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5} /> Equipo de escape</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6} /> Botas/cuero con puntas</div></td>
        
      </tr>
      <tr>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}  /> Cofia</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}  /> Antiparras</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}  /> Protectores Endoaurales Expansible</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10} /> Guante de Nitrilo</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11} /> Máscara facial con filtro</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12} /> Botas/goma con punteras</div></td>
     </tr>
      <tr>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13} /> Ropa de Trabajo</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14} /> Máscara de soldador</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15} /> Otro</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16} /> Guante Soldador</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17} /> Semi máscara facial C/filtro</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18} /> Zapatilla de seguridad</div></td>
    </tr>
    <tr>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19} /> Ropa resistente a sust. quim.</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20} /> Protector facial/máscara</div></td>
         <td></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21}  /> Guantes PVC</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22}  /> Ventiladores</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23}  /> Botín con puntera</div></td>
   </tr>
   <tr>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24}  /> Capa de lluvia</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25}  /> Otro</div></td>
         <td></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26}  /> Guante de kevlar</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27}  /> Purificadores de aire</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28}  /> Otro</div></td>
  </tr>
    <tr>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29}  /> Arnés de Seguridad</div></td>
         <td></td>
         <td></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30}  /> Otro</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31}  /> Barbijo</div></td>
         <td></td>
    </tr>
    </tbody>
  </table>
    </div>
  );
}
if(location.pathname=== `/archivos/${id}`){
  return (
    <div>
    <table className="table-sm" style={tableStyle2}>
    <thead>
        <tr>
            <th colSpan={6} style={{background: 'skyblue'}}>Elementos de Protección Personal</th>
        </tr>
      <tr>
        <th style={{background: 'skyblue'}} scope="col">Protección de Cabeza y Cuerpo</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Ojos y Cara</th>
        <th style={{background: 'skyblue'}} scope="col">Protección Auditiva</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Manos</th>
        <th style={{background: 'skyblue'}} scope="col">Protección Respiratoria</th>
        <th style={{background: 'skyblue'}} scope="col">Protección de Pies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox1} /> Casco de Seguridad</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox2} /> Gafas de seguridad</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox3} /> Protectores de copa</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox4} /> Guante de Vaqueta</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox5} /> Equipo de escape</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox6} /> Botas/cuero con puntas</div></td>
        
      </tr>
      <tr>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox7}  /> Cofia</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox8}  /> Antiparras</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox9}  /> Protectores Endoaurales Expansible</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox10} /> Guante de Nitrilo</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox11} /> Máscara facial con filtro</div></td>
           <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox12} /> Botas/goma con punteras</div></td>
     </tr>
      <tr>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox13} /> Ropa de Trabajo</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox14} /> Máscara de soldador</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox15} /> Otro</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox16} /> Guante Soldador</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox17} /> Semi máscara facial C/filtro</div></td>
          <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox18} /> Zapatilla de seguridad</div></td>
    </tr>
    <tr>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox19} /> Ropa resistente a sust. quim.</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox20} /> Protector facial/máscara</div></td>
         <td></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox21}  /> Guantes PVC</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox22}  /> Ventiladores</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox23}  /> Botín con puntera</div></td>
   </tr>
   <tr>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox24}  /> Capa de lluvia</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox25}  /> Otro</div></td>
         <td></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox26}  /> Guante de kevlar</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox27}  /> Purificadores de aire</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox28}  /> Otro</div></td>
  </tr>
    <tr>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox29}  /> Arnés de Seguridad</div></td>
         <td></td>
         <td></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox30}  /> Otro</div></td>
         <td><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked={checkboxValues.checkbox31}  /> Barbijo</div></td>
         <td></td>
    </tr>
    </tbody>
  </table>
    </div>
  );
}
}
