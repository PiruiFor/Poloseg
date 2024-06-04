import { userType } from './userTypes'

export const userReducer = (state, action)=>{

    switch (action.type) {
        case userType.login:
            localStorage.setItem('userData', JSON.stringify({isLogged: true, token: action.token, nombre: action.nombre, role: action.role}))
            return {
                isLogged: true,
                token: action.token,
                nombre: action.nombre,
                role: action.role
            }
        case userType.logOut:
            localStorage.removeItem('userData')
            return {
                isLogged: false
            }

        default:
            break;
    }
}