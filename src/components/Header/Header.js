import React from 'react'
import { MenuIcon } from '../../assets/icons/icons'
import LogoSvg from '../../assets/Logo'

const Header = ({ onToggle }) => {
  return (
    <header className="h-16 fixed w-full top-0 left-0 bg-primary text-white flex justify-center items-center pl-3 md:hidden">
      <span onClick={onToggle} className="text-xl absolute left-3 top-3">
        <MenuIcon />
      </span>
      <LogoSvg />
    </header>
  )
}

export default Header
