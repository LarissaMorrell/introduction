import React, { Component } from "react";
import Thumbnail from "./Thumbnail.js";

export default class ThumbnailPreview extends Component {
  generateThumbnails(images) {
    let iterator = 0;
    return this.props.images.map(image => (
      <Thumbnail
        src={image}
        key={iterator++}
        changeImage={this.props.changeImage}
      />
    ));
  }

  render() {
    return (
      <div className="thumbnail-image-container">
        {this.generateThumbnails(this.props.images)}
      </div>
    );
  }
}
