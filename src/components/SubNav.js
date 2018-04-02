import React, { Component } from "react";

export default class SubNav extends Component {
  render() {
    return (
      <div className="sub-nav">
        <nav>
          <a src="http://wayfair.com" alt="hi">
            Bed & Bath
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="hi">
            Bedding
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="hi">
            Blankets & Throws
          </a>
          <span>/</span>
          <a src="http://wayfair.com" alt="hi">
            Cotton Blankets
          </a>
          <span>/</span>
          SKU: LRFY5773
        </nav>
      </div>
    );
  }
}
