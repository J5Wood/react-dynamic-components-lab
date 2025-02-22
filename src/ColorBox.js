import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return this.props.opacity < .2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={this.props.opacity - .1}/>
      </div>
    )
  }
}