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
    // this.state.bind(this);
  }

  changeImage(e) {
    let newState = Object.assign({}, this.state, {
      activeImage: e.target.src.split("/media/")[1]
    });
    console.log(newState.activeImage);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <nav>
          <a src="http://wayfair.com" alt="hi">
            Bed & Bath
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="hi">
            Bedding
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="hi">
            Blankets & Throws
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="hi">
            Cotton Blankets
          </a>
          <span>/</span>
          SKU: LRFY5773
        </nav>
        <div className="profile-images">
          <ThumbnailPreview
            activeImageId={this.state.activeImage}
            changeImage={e => this.changeImage(e)}
            images={images}
          />
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
