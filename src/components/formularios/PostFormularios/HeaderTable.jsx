import React, {useState} from 'react'
import Swal from 'sweetalert2'

export const HeaderTable = ({onGuardadoChange, onCheckboxesChange, onEmpresaChange, onYacimientoChange, onAreaChange, onPermisoTrabajoChange, onTareaChange, onPasosChange, onTextAreaChange}) => {
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
        checkbox12: false
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

  const [empresaLocal, setEmpresaLocal] = useState('');
  const [Area, setArea] = useState('');
  const [PermisoTrabajo, setPermisoTrabajo] = useState(0);
  const [Yacimiento, setYacimiento] = useState('');
  const [Tarea, setTarea ] = useState('');
  const [Pasos, setPasos] = useState('');


  const [textArea, setTextArea] = useState({
    textArea1: '',
    textArea2: '',
    textArea3: '',
    textArea4: '',
    textArea5: '',
    textArea6: '',
    textArea7: '',
    textArea8: '',
    textArea9: '',
    textArea10: '',
    textArea11: '',
    textArea12: '',
    textArea13: '',
    textArea14: '',
    textArea15: '',
    textArea16: ''
  })


  const guardarHeader = async () => {
  
    try {
      console.log('Valores header true: ', checkboxesSeleccionados, empresaLocal, Area, PermisoTrabajo);
      console.log('Guardando correctamente Header');
      await Swal.fire({
        title: 'Guardado correctamente',
        icon: 'success'
      })

      disabledTable();
      setGuardado(true);
      onGuardadoChange(true);
      onEmpresaChange(empresaLocal);
      onAreaChange(Area);
      onPermisoTrabajoChange(PermisoTrabajo);
      onYacimientoChange(Yacimiento);
      onTareaChange(Tarea);
      onPasosChange(Pasos);
      onCheckboxesChange(checkboxesSeleccionados);
      onTextAreaChange(textArea)

    } catch (error) {
      await Swal.fire({
        title: 'No se pudo enviar',
        icon: 'error'
      })
      console.error('Error al enviar el formulario', error);
    }
  };

  return (
    <>
    <div>
        <h2 className='section-title' style={{color: 'blueviolet', marginTop: 70}}>ATS- ANALISIS DE TRABAJO SEGURO</h2>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label" style={{color:'#32CD32'}}>Empresa:</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Refsa..." value={empresaLocal} onChange={(e) => setEmpresaLocal(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label" style={{color:'#32CD32'}}>Area o Sector:</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Electricidad..."value={Area} onChange={(e) => setArea(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label" style={{color:'#32CD32'}}>N° Permiso de Trabajo:</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="12421..." value={PermisoTrabajo} onChange={(e) => setPermisoTrabajo(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label" style={{color:'#32CD32'}}>Yacimiento:</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="3..." value={Yacimiento} onChange={(e) => setYacimiento(e.target.value)}/>
      </div>

        <table className='table table-striped table-sm'  aria-disabled={!tableEnabled} style={tableStyle}>
            <thead>
                <th className='th'>Trabajos Peligrosos</th>
                <th className='th'>Trabajo en:</th>
            </thead>
            <tbody>
                <th>
                    <tr><div className="form-check form-switch"><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox1} onChange={() => handleCheckboxChange('checkbox1')}/> Trabajo en Espacio Confinado</div></tr>
                    <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox2} onChange={() => handleCheckboxChange('checkbox2')}/> Trabajo en Equipo energizado</div></tr>
                    <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox3} onChange={() => handleCheckboxChange('checkbox3')}/> Trabajo en Caliente</div></tr>
                    <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox4} onChange={() => handleCheckboxChange('checkbox4')}/> Trabajo en Altura</div></tr>
                    <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox5} onChange={() => handleCheckboxChange('checkbox5')}/> Trabajo en Zanja o excavaciones</div></tr>
                </th>
                <th>
                    
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox6} onChange={() => handleCheckboxChange('checkbox6')}/> Caminos/picada</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox7} onChange={() => handleCheckboxChange('checkbox7')}/> Tanques</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox8} onChange={() => handleCheckboxChange('checkbox8')}/> Líneas de conducción</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox9} onChange={() => handleCheckboxChange('checkbox9')}/> Pozos</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox10} onChange={() => handleCheckboxChange('checkbox10')}/> Instalación Elec.</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox11} onChange={() => handleCheckboxChange('checkbox11')}/> Equipos</div></tr>
                        <tr><div className='form-check form-switch'><input type="checkbox" className="form-check-input"  id="flexSwitchCheckDefault" checked= {checkboxValues.checkbox12} onChange={() => handleCheckboxChange('checkbox12')}/> Otros</div></tr>
                    
                </th>
            </tbody>
        </table>

        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label" style={{color:'#32CD32'}}>Tarea a Ejecutar:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={Tarea} onChange={(e) => setTarea(e.target.value)}></textarea>
       </div>

       <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label" style={{color:'#32CD32'}}>Pasos a realizar:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={Pasos} onChange={(e) => setPasos(e.target.value)}></textarea>
       </div>

    </div>
     <div style={{display: 'grid', placeItems: 'center'}}>
    <table className='table-responsive' aria-disabled={!tableEnabled} style={tableStyle}>
    <thead>
        <th style={{background:'skyblue'}}>Paso N°</th>
        <th style={{background:'skyblue'}}>Pasos de la tarea</th>
        <th style={{background:'red'}}>Peligros</th>
        <th style={{background:'#FFD700'}}>Riesgos y Consecuencias</th>
        <th style={{background:'#32CD32'}}>Medidas Preventivas y de control</th>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"  onChange={({target}) => setTextArea({...textArea, textArea1: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea2: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea3: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea4: target.value})}></textarea>
            </div>
            </th>
        </tr>
        <tr>
            <th>2</th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea5: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea6: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea7: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea8: target.value})}></textarea>
            </div>
            </th>
        </tr>
        <tr>
            <th>3</th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea9: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea10: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea11: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea12: target.value})}></textarea>
            </div>
            </th>
        </tr>
        <tr>
            <th>4</th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea13: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"  onChange={({target}) => setTextArea({...textArea, textArea14: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"  onChange={({target}) => setTextArea({...textArea, textArea15: target.value})}></textarea>
            </div>
            </th>
            <th>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={({target}) => setTextArea({...textArea, textArea16: target.value})}></textarea>
            </div>
            </th>
        </tr>
    </tbody>
</table>
<div className="botonesGrupo" style={{marginTop: 50}}>
   <button onClick={guardarHeader} className="btn btn-success">Guardar</button>
</div>
</div>
    </>
  )
}

