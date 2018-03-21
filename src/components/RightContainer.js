import React, { Component } from "react";
import ProductInfoContainer from "./ProductInfoContainer.js";
import ProductOverview from "./ProductOverview.js";
import ReviewsContainer from "./ReviewsContainer.js";

export default class RightContainer extends Component {
  render() {
    return (
      <div>
        <ProductInfoContainer />
        <ProductOverview />
        <ReviewsContainer />
      </div>
    );
  }
}
