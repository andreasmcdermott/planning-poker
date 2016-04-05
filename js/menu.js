import React from 'react';
import NavLink from './navlink';

export default class Menu extends React.Component {
  render () {
    return (
      <header id="menu">
        <h1>Planning Poker</h1>
        <nav>
          <ul>
            <li><NavLink to="/standard">Standard</NavLink></li>
            <li><NavLink to="/tshirt">T-Shirt</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}
