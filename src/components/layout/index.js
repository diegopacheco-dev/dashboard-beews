import { useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(!isOpen)
  const closeSideBar = () => setIsOpen(false)

  return (
    <div>
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <div className="min-h-screen md:ml-64 bg-white md:bg-tertiary-50">
        <Header onToggle={onToggle} />
        <div
          onClick={isOpen === true ? closeSideBar : null}
          className="min-h-screen max-w-7xl md:w-11/12 mx-auto md:py-8 pt-16 md:pt-10"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
