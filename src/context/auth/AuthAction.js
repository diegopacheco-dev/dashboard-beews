import { LOGIN, LOGOUT } from './types'

export const AuthActions = (state, dispatch) => {
  const loginAction = (user) => {
    localStorage.setItem('user', JSON.stringify({ ...user, isAuth: true }))
    dispatch({ type: LOGIN, payload: user })
  }

  const logoutAction = () => {
    console.log('cerrar sesion')
    localStorage.removeItem('user')
    dispatch({ type: LOGOUT })
  }
  return { loginAction, logoutAction }
}
