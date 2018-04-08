import React, { Component } from "react";
import ThumbnailPreview from "./ThumbnailPreview.js";
let images = [
  "headshot.jpg",
  "node-logo.png",
  "react-logo.png",
  "html-logo.png"
];

export default class LeftContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: images[0]
    };
  }

  changeImage(e) {
    let newState = Object.assign({}, this.state, {
      activeImage: e.target.src.split("/media/")[1]
    });
    this.setState(newState);
  }

  render() {
    return (
      <div className="profile-images">
        <ThumbnailPreview
          activeImageId={this.state.activeImage}
          changeImage={e => this.changeImage(e)}
          images={images}
        />
        <div className="large-image-container">
          <img
            className="large-image"
            src={`media/${this.state.activeImage}`}
            alt="headshot"
          />
        </div>
      </div>
    );
  }
}
