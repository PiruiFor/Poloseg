import { useContext } from 'react'
import { UserContext } from '../context/userContext';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {

    const {state} = useContext(UserContext);

    console.log(state)

  return (
    !state.isLogged ? <Outlet/> : <Navigate to={'/panel'}/> 
  )
}

export default PublicRoutes