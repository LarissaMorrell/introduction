import React, { Component } from "react";
import Sticky from "react-stickynode";

export default class CallToActionButtons extends Component {
  render() {
    return (
      <Sticky bottomBoundary={1200}>
        <div id="call-to-action">
          <button className="secondary">
            <i className="fa fa-heart space-after-fa" aria-hidden="true" />
            Hire
          </button>
          <button className="primary">Contact Today!</button>
        </div>
      </Sticky>
    );
  }
}
