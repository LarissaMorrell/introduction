import React, { Component } from "react";

export default class Thumbnail extends Component {
  render() {
    let src = this.props.src;
    return (
      <img
        className="thumbnail-image"
        onMouseOver={e => this.props.changeImage(e)}
        src={`media/screenshots/${src}`}
        alt={src.substring(0, src.indexOf("."))}
      />
    );
  }
}
