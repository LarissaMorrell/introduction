import React, { Component } from "react";
import StarRating from "./StarRating.js";

export default class ProductInfoContainer extends Component {
  render() {
    return (
      <div>
        <h1>Larissa Morrell</h1>
        <p>
          by
          <a href="http://wayfair.com" alt="someone">
            some person
          </a>
        </p>
        <StarRating rating={[5]} />
      </div>
    );
  }
}
