import React from 'react'
import {Link} from 'react-router'

const Menu = () => (
  <header className="menu" role="banner">
    <h1>Planning Poker</h1>
    <nav role="navigation">
      <ul role="presentation">
        <li role="presentation"><Link to="/tshirts" activeClassName="active">T-Shirt</Link></li>
        <li role="presentation"><Link to="/standards" activeClassName="active">Standard</Link></li>
      </ul>
    </nav>
  </header>
)

export default Menu