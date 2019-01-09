import React from 'react';

import './ColorBox.css';

const ColorBox = props => {

  const inLineStyle = {
    backgroundColor: props.color
  }
  return (
    <div className="ColorBox" style={inLineStyle} />
  );
}

export default ColorBox;

