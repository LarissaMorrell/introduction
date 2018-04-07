import React, { Component } from "react";
import Sticky from "react-stickynode";

export default class CallToActionButtons extends Component {
  render() {
    return (
      <Sticky bottomBoundary={1200}>
        <div id="call-to-action">
          <button className="secondary">
            <i className="fa fa-heart" aria-hidden="true" />
            Save
          </button>
          <button className="primary">Contact Today!</button>
        </div>
      </Sticky>
    );
  }
}
