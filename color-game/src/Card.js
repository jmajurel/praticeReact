import React, { Component } from 'react';

import './Card.css';

/*
 * By default the card must shown grey color, when selected show the hiddenColor 
 */

class Card extends Component {

  static defaultProps = {
    backgroundColor: 'black',
    handleClick: () => {}
  }

  render(){
    return (
      <div className="card" 
        name={this.props.name}
	onClick={() => this.props.handleClick(Number(this.props.name.split('-')[1]))}
	style={{ backgroundColor: this.props.backgroundColor }}
      />
    );
  }
}

export default Card;
