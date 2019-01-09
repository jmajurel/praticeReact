import React, { Component } from 'react';

import './NavBar.css';
/*
 * The NavBar contains a title at the right hand side and a button at the left to restart the game
 */
class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
	<ul className="nav-bar-content">
	  <li className="nav-bar-item">Color Game</li>
	  <li className="nav-bar-item">New Game</li>
	</ul>
      </nav>
    );
  }
}

export default NavBar;
