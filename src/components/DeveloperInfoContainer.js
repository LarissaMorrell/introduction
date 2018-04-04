import React, { Component } from "react";
import StarRating from "./StarRating.js";

export default class DeveloperInfoContainer extends Component {
  render() {
    return (
      <div id="developer-info-container">
        <h1>Full Stack Developer</h1>
        <p>
          by
          <a href="https://larissamorrell.com" alt="larissa's portfolio">
            Larissa Morrell
          </a>
        </p>
        <StarRating rating={[5]} />
        <p className="pricing">$199.99</p>
      </div>
    );
  }
}
