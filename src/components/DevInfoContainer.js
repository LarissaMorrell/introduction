import React, { Component } from "react";
import StarRating from "./StarRating.js";
import DevInfoPricing from "./DevInfoPricing.js";
import DevInfoDelivery from "./DevInfoDelivery.js";

export default class DevInfoContainer extends Component {
  render() {
    return (
      <div id="developer-info-container">
        <h1>Full Stack Developer</h1>
        <p>
          See more info about
          <a href="https://larissamorrell.com" alt="larissa's portfolio">
            Larissa Morrell
          </a>
        </p>
        <StarRating rating={[5]} />
        <DevInfoPricing />
        <DevInfoDelivery />
      </div>
    );
  }
}
