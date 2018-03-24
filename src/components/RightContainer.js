import React, { Component } from "react";
import ProductInfoContainer from "./ProductInfoContainer.js";
import ReviewsContainer from "./ReviewsContainer.js";
import CollapsibleCard from "./CollapsibleCard.js";

export default class RightContainer extends Component {
  render() {
    return (
      <div>
        <ProductInfoContainer />
        <ReviewsContainer />
        <CollapsibleCard title="details click here" />
      </div>
    );
  }
}
