import React, { Component } from 'react';
import './ColorGameApp.css';

import NavBar from './NavBar';
import GameBoard from './GameBoard';

/*
 * Requirements: Create a color guessing game
*/

class ColorGameApp extends Component {
  render() {
    return (
      <div className="color-game-app">
        <NavBar />
	<GameBoard />
      </div>
    );
  }
}

export default ColorGameApp;
