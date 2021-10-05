import { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Layout from '../components/layout'
import useAuth from '../hooks/useAuth'
import HomeView from '../views/admin/HomeView'
import ListaClientes from '../views/admin/ListaClientes'
import ListaContactanos from '../views/admin/ListaContactanos'
import ListaNewsletter from '../views/admin/ListaNewsletter'
import ListaPedidos from '../views/admin/ListaPedidos'
import LoginView from '../views/auth/LoginView'

const HomeRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/lista-pedidos" component={ListaPedidos} />
        <Route path="/lista-clientes" component={ListaClientes} />
        <Route path="/lista-newsletter" component={ListaNewsletter} />
        <Route path="/lista-contactanos" component={ListaContactanos} />
      </Switch>
    </Layout>
  )
}

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={LoginView} />
    </Switch>
  )
}

const RootRouter = () => {
  const history = useHistory()
  const { isAuth } = useAuth()
  console.log('Router : ', isAuth)

  useEffect(() => {
    if (isAuth) {
      history.push('/')
    } else {
      history.push('/auth/login')
    }
  }, [isAuth])

  return <div>{isAuth ? HomeRoutes() : AuthRoutes()}</div>
}

export default RootRouter
