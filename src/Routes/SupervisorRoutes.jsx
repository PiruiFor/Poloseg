import { useContext } from 'react'
import { UserContext } from '../context/userContext';
import { Navigate, Outlet } from 'react-router-dom';

const InspectorRoutes = () => {

    const {state} = useContext(UserContext);

  return (
    state.role === "Supervisor" ? <Outlet/> : <Navigate to={'/'}/>
  )
}

export default InspectorRoutes