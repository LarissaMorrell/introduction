import React, { Component } from "react";

export default class RightContainer extends Component {
  render() {
    return (
      <div>
        <h2>Product Overview</h2>
        <div>
          <h3>Description</h3>
          <p>
            Pull one of these openwork end tables up to a cozy arm chair for a
            classic reading nook, or set one next to the tub as a catch-all for
            shampoos and folded washcloths.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Friendly</li>
            <li>Smart</li>
            <li>Funny</li>
            <li>Learner</li>
          </ul>
          <button>Show More</button>
        </div>
      </div>
    );
  }
}
