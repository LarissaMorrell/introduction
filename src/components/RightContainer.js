import React, { Component } from "react";
import DevInfoContainer from "./DevInfoContainer.js";
import CallToActionButtons from "./CallToActionButtons.js";
import AboutLarissaContainer from "./AboutLarissaContainer.js";
import ProjectsPanel from "./ProjectsPanel.js";
import LanguagesPanel from "./LanguagesPanel.js";
import CallWithQuestions from "./CallWithQuestions.js";
// import Video from "./Video.js";

export default class RightContainer extends Component {
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

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  render() {
    return (
      <div className="right-container">
        <DevInfoContainer />
        <CallToActionButtons />
        <AboutLarissaContainer />
        <LanguagesPanel windowWidth={this.state.width} />
        <ProjectsPanel windowWidth={this.state.width} />
        <CallWithQuestions />
      </div>
    );
  }
}
