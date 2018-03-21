import React, { Component } from "react";

export default class ThumbnailPreview extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <img
              className="thumbnail-images"
              src="media/headshot.jpg"
              alt="headshot"
            />
          </li>
          <li>
            <img
              className="thumbnail-images"
              src="media/headshot.jpg"
              alt="headshot"
            />
          </li>
          <li>
            <img
              className="thumbnail-images"
              src="media/headshot.jpg"
              alt="headshot"
            />
          </li>
        </ul>
      </div>
    );
  }
}
