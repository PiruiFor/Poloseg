import { useContext } from 'react'
import { UserContext } from '../context/userContext';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = () => {

    const {state} = useContext(UserContext);

  return (
    state.role === "Admin" || state.role === "Operario" ? <Outlet/> : <Navigate to={'/permisos'}/>
  )
}

export default AdminRoutes