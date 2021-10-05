import { useReducer, createContext } from 'react'
import AuthReducer from './AuthReducer'
import { AuthActions } from './AuthAction'

export const initialState = {
  user: '',
  email: '',
  rol: null,
  isAuth: false
}

export const AuthContext = createContext()

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(
    AuthReducer,
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : initialState
  )

  console.log('Estado : ', state)

  const props = {
    ...state,
    ...AuthActions(state, dispatch)
  }

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>
}

export default AuthState
