import React, { Component } from "react";

export default class Thumbnail extends Component {
  render() {
    return (
      <img
        className="thumbnail-image"
        onMouseOver={e => this.props.changeImage(e)}
        src={`media/${this.props.src}`}
        alt="headshot"
      />
    );
  }
}
