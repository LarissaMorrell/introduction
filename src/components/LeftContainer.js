import React, { Component } from "react";
import Sticky from "react-stickynode";
import SubNav from "./SubNav.js";
import CodePreviewContainer from "./CodePreviewContainer.js";

export default class LeftContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    let width = window.innerWidth;
    this.setState({ width: width });
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div className="left-container">
        <Sticky enabled={this.state.width > 600} bottomBoundary={1200}>
          <SubNav />
          <CodePreviewContainer />
        </Sticky>
      </div>
    );
  }
}
