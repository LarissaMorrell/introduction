import React, { Component } from "react";
import CallToActionButtons from "./CallToActionButtons.js";
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
        <div>
          <span className="pricing red-font">$199.99 </span>
          <span className="strike-through">$100,000</span>
          <span className="red-font"> 48% Off</span>
        </div>
        <div>
          <span className="pricing red-font">Hire Today!</span>
        </div>
        <div className="delivery-info">
          <img src="./media/delivery-truck.png" />
          <p>FREE Next-Day Shipping!</p>
        </div>
        <div>Get Larissa by *date*! Order within *time*</div>
        <div>
          Ship To:
          <button className="link-styling">
            4 Copley Place, 7th floor, Boston, MA 02116
          </button>
        </div>
        <CallToActionButtons />
      </div>
    );
  }
}
