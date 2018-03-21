import React, { Component } from "react";
import ThumbnailPreview from "./ThumbnailPreview.js";

export default class LeftContainer extends Component {
  render() {
    return (
      <div>
        <nav>
          <a src="#" alt="">
            Bed & Bath
          </a>
          <span>/</span>
          <a src="#" alt="">
            Bedding
          </a>
          <span>/</span>
          <a src="#" alt="">
            Blankets & Throws
          </a>
          <span>/</span>
          <a src="#" alt="">
            Cotton Blankets
          </a>
          <span>/</span>
          SKU: LRFY5773
        </nav>
        <div className="profile-images">
          <ThumbnailPreview />
          <img
            className="large-image"
            src="media/headshot.jpg"
            alt="headshot"
          />
        </div>
      </div>
    );
  }
}
