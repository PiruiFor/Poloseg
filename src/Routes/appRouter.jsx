import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePage } from '../Components/HomePage.jsx'
import { Login } from '../Components/Login/Login.jsx';
import { Permisos } from '../components/formularios/Permisos';
import { MostrarForms } from '../components/formularios/MostrarForms';
import { Register } from '../Components/Register/Register.jsx';
import { PanelControl } from '../components/PanelControl/PanelControl.jsx';
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import AdminRoutes from './AdminRoutes';
import SupervisorRoutes from './SupervisorRoutes.jsx'
import OperarioRoutes from "./OperarioRoutes"
import { Aside } from '../components/Aside/Aside.jsx';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { ArchivosMain } from '../components/Archivos/ArchivosMain';
import { HeaderTool } from '../components/headerTool/HeaderTool';
import { Notificaciones } from '../components/notificaciones/Notificaciones.jsx';
import { MostrarFormsNotificacion } from '../components/formularios/MostrarFormsNotificacion.jsx';
import { EditarUsuario } from '../components/EditarUsuario/EditarUsuario.jsx';
export const AppRouter = () => {
  return (
    <>
    <Router>
          <Routes>

            <Route element={<PublicRoutes/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path='/login' element= {<Login/>}/>
            </Route>
            
            <Route element={<> <Aside/> <HeaderTool/> <PrivateRoutes/> </>}>

            <Route element={<AdminRoutes/>}>
              <Route path='/dashboard' element={<Dashboard/>}/> 
              <Route path='/panel' element={<PanelControl/>}/> 
              <Route path='/register' element={<Register/>}/>
              <Route path='/archivos' element={<ArchivosMain/>}/>
            </Route>

            <Route element={<SupervisorRoutes/>}>
            <Route path='/dashboard' element={<Dashboard/>}/> 
            <Route path='/archivos' element={<ArchivosMain/>}/>
            </Route>

            <Route element={<OperarioRoutes/>}>
                <Route path='/permisos' element={<Permisos/>}/>
                <Route path='/notificaciones' element={<Notificaciones/>}/>
                <Route path='/formularios/:id' element={<MostrarForms/>}/>
                <Route path='/notificaciones/:id/:idNotificacion' element={<MostrarFormsNotificacion/>}/>
            </Route>

            <Route path='/editar' element={<EditarUsuario/>}/>
            </Route>
          </Routes>
    </Router>
    </>
)};
