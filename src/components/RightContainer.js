import React, { Component } from "react";
import DevInfoContainer from "./DevInfoContainer.js";
import CallToActionButtons from "./CallToActionButtons.js";
import AboutLarissaContainer from "./AboutLarissaContainer.js";
import LanguagesPanel from "./LanguagesPanel.js";
import PhoneQuestions from "./PhoneQuestions.js";
// import Video from "./Video.js";

export default class RightContainer extends Component {
  render() {
    return (
      <div className="right-container">
        <DevInfoContainer />
        <CallToActionButtons />
        <AboutLarissaContainer />
        <LanguagesPanel />
        <PhoneQuestions />
      </div>
    );
  }
}
// <Video />
