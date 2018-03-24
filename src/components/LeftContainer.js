import React, { Component } from "react";
import ThumbnailPreview from "./ThumbnailPreview.js";

export default class LeftContainer extends Component {
  render() {
    return (
      <div>
        <nav>
          <a src="http://wayfair.com" alt="">
            Bed & Bath
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="">
            Bedding
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="">
            Blankets & Throws
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="">
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
