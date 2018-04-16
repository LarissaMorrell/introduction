import React, { Component } from "react";

export default class DevInfoPricing extends Component {
  render() {
    return (
      <div className="dev-pricing-container">
        <div>
          <span className="pricing-text red-font">$199.99 </span>
          <span className="strike-through">$399.99</span>
          <span className="red-font"> 50% Off</span>
        </div>
        <div>
          <span className="pricing-text red-font">Hire Today!</span>
        </div>
      </div>
    );
  }
}
