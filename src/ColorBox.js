import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const currentOpacity = this.props.opacity
    return currentOpacity < .2 ? null : (
      <div className="color-box" style={{opacity: currentOpacity}}>
        <ColorBox key={currentOpacity} opacity={currentOpacity - .1}/>
      </div>
    )
  }
}