import React, { Component } from "react";

export default class RightContainer extends Component {
  render() {
    return (
      <div className="video-container">
        <iframe
          width="475"
          height="266"
          src="https://www.youtube.com/embed/-uMbvR4cq74?rel=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    );
  }
}
