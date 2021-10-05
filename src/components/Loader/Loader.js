import React from 'react'
import './Loader.css'

const Loader = ({ size = 'md' }) => {
  return (
    <div className="w-full flex justify-center">
      <div className={`loader ${size}`}></div>
    </div>
  )
}

export default Loader
