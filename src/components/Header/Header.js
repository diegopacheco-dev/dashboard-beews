import React from 'react'
import { MenuIcon } from '../../assets/icons/icons'

const Header = ({ onToggle }) => {
  return (
    <header className="h-13 fixed w-full top-0 left-0 bg-primary text-white flex items-center pl-3 md:hidden">
      <span onClick={onToggle} className="text-xl">
        <MenuIcon />
      </span>
    </header>
  )
}

export default Header
