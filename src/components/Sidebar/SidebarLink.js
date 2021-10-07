import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({ icon: Icon, label, to = '/' }) => {
  return (
    <NavLink
     to={to} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary text-tertiary-500 hover:text-white border-l-4 border-transparent pr-6 transition-colors">
      <span className="inline-flex justify-center items-center ml-4">
        {Icon ? <Icon className="w-5 h-5" /> : null}
      </span>
      <span className="ml-2 font-semibold text-lg sm:text-sm tracking-wide truncate font-sans">
        {label}
      </span>
    </NavLink>
  )
}

export default SidebarLink
