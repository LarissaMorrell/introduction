import React, { Component } from "react";
import ThumbnailPreview from "./ThumbnailPreview.js";
let images = [
  "workstation.jpg",
  "vintner-front-end.png",
  "vintner-mongoose.png",
  "vintner-node.png"
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
      activeImage: e.target.src.split("/media/screenshots/")[1]
    });
    this.setState(newState);
  }

  render() {
    let activeImage = this.state.activeImage;
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
            src={`media/screenshots/${activeImage}`}
            alt={activeImage.substring(0, activeImage.indexOf("."))}
          />
        </div>
      </div>
    );
  }
}
