import React from 'react'

import './style.css'
import ShoppingCart from '../ShoppingCart'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <h1>BFSHOES</h1>

        <input className='navbar-input' placeholder='O que você está procurando?'/>

        <ul className='navbar-navigation'>
          <li>
            <Link className="navbar-navigation-link" to="/">Início</Link>
          </li>

          <li>
            <Link className="navbar-navigation-link" to="/contact">Contato</Link>
          </li>

        </ul>

       <ShoppingCart/>

    </div>
  )
}

export default Navbar