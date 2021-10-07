import { Home, LogOut, Settings, User } from 'react-feather'
import {
  BellsIcon,
  ClientsIcon,
  GiftIcon,
  MailIcon
} from '../../assets/icons/icons'

// import useAuth from '@/hooks/useAuth'
import useAuth from '../../hooks/useAuth'
import SidebarLink from './SidebarLink'
// import SidebarCollapse from './SidebarCollapse'

const Sidebar = ({ isOpen, onToggle }) => {
  const { logoutAction, user, rol } = useAuth()

  return (
    <>
      <div
        className={`fixed z-10 transition-all flex flex-col top-0 md:left-0 w-64 bg-tertiary-200 h-full shadow-lg ${
          isOpen ? 'left-0' : '-left-full'
        }`}
      >
        <div className="flex items-center pl-6 h-20 border-b border-tertiary-300">
          <div className="rounded-full h-11 w-11 flex items-center justify-center mr-3 border-2 border-primary" />
          <div className="ml-1">
            <p className="ml-1 text-lg sm:text-md font-bold tracking-wide truncate text-tertiary-500 font-sans">
              {user.replace(/./, (c) => c.toUpperCase())}
            </p>
            <div className="badge">
              <span className="px-2 py-0.5 ml-auto text-sm sm:text-xs font-bold sm:font-medium tracking-wide text-tertiary-400 bg-primary-300 rounded-full">
                {rol}
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-6 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="flex font-semibold text-md sm:text-sm text-primary-700 my-4 font-sans uppercase">
                  Dashboard
                </div>
              </div>
            </li>
            <li>
              <SidebarLink icon={Home} label="Inicio" to="/" />
            </li>
            {/* <li>
              <SidebarCollapse icon={Box} label="Despacho">
                <SidebarLink label="Lista" to="/lista-despacho" />
                <SidebarLink label="Crear Despacho" to="/nuevo-despacho" />
              </SidebarCollapse>
            </li> */}
            <li>
              <SidebarLink
                icon={GiftIcon}
                label="Pedidos"
                to="/lista-pedidos"
              />
            </li>
            <li>
              <SidebarLink
                icon={ClientsIcon}
                label="Clientes"
                to="/lista-clientes"
              />
            </li>
            <li>
              <SidebarLink
                icon={BellsIcon}
                label="Newsletter"
                to="/lista-newsletter"
              />
            </li>
            <li>
              <SidebarLink
                icon={MailIcon}
                label="Contactanos"
                to="/lista-contactanos"
              />
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="flex font-semibold text-md sm:text-sm text-primary-700 my-4 font-sans uppercase">
                  Configuraciones
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary text-tertiary hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6 transition-colors"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <User className="w-5 h-5" />
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Perfil
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary text-tertiary hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6 transition-colors"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <Settings className="w-5 h-5" />
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Cuenta
                </span>
              </a>
            </li>
            <li>
              <button
                onClick={logoutAction}
                className="relative w-full flex flex-row items-center h-11 focus:outline-none hover:bg-primary text-tertiary hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 text-red-400">
                  <LogOut className="w-5 h-5" />
                </span>
                <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">
                  Cerrar sesion
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* <button
        onClick={onToggle}
        className="fixed md:hidden bottom-5 right-5 rounded-full bg-blue-500 text-white p-2"
      >
        <MoreVertical />
      </button> */}
    </>
  )
}

export default Sidebar
