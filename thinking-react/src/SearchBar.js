import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <form>
        <input type='text' placeholder='Search...' /> 
	<input id='stock-option' type='radio' />
      </form>
    );
  }
}

export default SearchBar;
