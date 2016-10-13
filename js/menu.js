import React from 'react'
import NavLink from './navlink'

const Menu = () => (
  <header id="menu">
    <h1>Planning Poker</h1>
    <nav>
      <ul>
        <li><NavLink to="/standards">Standard</NavLink></li>
        <li><NavLink to="/tshirts">T-Shirt</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Menu