import React, { Component } from "react";

export default class SubNav extends Component {
  render() {
    return (
      <div className="sub-nav">
        <nav>
          <a src="http://wayfair.com" alt="hi">
            Wayfair
          </a>
          <span className="breadcrumb-spacing">/</span>
          <a src="http://wayfair.com" alt="hi">
            Storefront Engineering
          </a>
          <span className="breadcrumb-spacing">/</span>
          <a src="http://wayfair.com" alt="hi">
            Front & Back End
          </a>
          <span className="breadcrumb-spacing">/</span>
          SKU: PH9782764248
        </nav>
      </div>
    );
  }
}
