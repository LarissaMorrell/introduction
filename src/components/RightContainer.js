import React, { Component } from "react";
import ProductInfoContainer from "./ProductInfoContainer.js";
import ReviewsContainer from "./ReviewsContainer.js";
import AboutLarissaContainer from "./AboutLarissaContainer.js";
import LanguagesPanel from "./LanguagesPanel.js";

export default class RightContainer extends Component {
  render() {
    return (
      <div className="right-container">
        <ProductInfoContainer />
        <ReviewsContainer />
        <AboutLarissaContainer />
        <LanguagesPanel />
      </div>
    );
  }
}
