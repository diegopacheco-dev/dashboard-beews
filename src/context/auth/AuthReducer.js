import { LOGIN, LOGOUT } from './types'
import { initialState } from './AuthState'

const AuthReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOGIN:
      console.log('login reducer')
      return {
        ...state,
        user: payload.user,
        email: payload.email,
        rol: payload.rol,
        isAuth: true
      }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default AuthReducer
