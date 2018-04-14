import React, { Component } from "react";
import Sticky from "react-stickynode";

export default class CallToActionButtons extends Component {
  render() {
    return (
      <Sticky bottomBoundary={1200}>
        <div id="call-to-action">
          <a
            className="button-styling secondary-button secondary-purple-button"
            href="mailto:larissa@larissamorrell.com?Subject=Wayfair%20is%20Interested"
            alt="email Larissa"
          >
            <i className="fa fa-heart space-after-fa" aria-hidden="true" />
            Hire
          </a>
          <a
            className="button-styling primary-button"
            href="mailto:larissa@larissamorrell.com?Subject=Wayfair%20is%20Interested"
            alt="email Larissa"
          >
            Contact Today!
          </a>
        </div>
      </Sticky>
    );
  }
}
