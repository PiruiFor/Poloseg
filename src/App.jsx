import { useReducer, useState } from "react"
import { UserContext } from "./context/userContext"
import { AppRouter } from "./Routes/appRouter";
import { userReducer } from "./context/userReducer"
import io from 'socket.io-client';

const socket = io('http://localhost:3001');


function App() {
 
  const obtenerToken = ()=> JSON.parse(localStorage.getItem('userData')) || {isLogged: false};

  const [state, stateDispatch] = useReducer(userReducer, {}, obtenerToken);

  const [notificaciones, setNotificaciones] = useState([]);



  return (
    <>
      <UserContext.Provider value={{state, stateDispatch, notificaciones, setNotificaciones, socket}}>
        <AppRouter />
      </UserContext.Provider>
    </>
  )
}

export default App