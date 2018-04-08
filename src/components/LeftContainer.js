import React, { Component } from "react";
import Sticky from "react-stickynode";
import SubNav from "./SubNav.js";
import CodePreviewContainer from "./CodePreviewContainer.js";

export default class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container">
        <Sticky bottomBoundary={1200}>
          <SubNav />
          <CodePreviewContainer />
        </Sticky>
      </div>
    );
  }
}
