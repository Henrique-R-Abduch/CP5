import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='Footer-Wrapper'>
        Todos os direitos reservados HSportingH® - {new Date().getFullYear()}
    </div>
  )
}

export default Footer