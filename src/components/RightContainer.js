import React, { Component } from "react";
import DevInfoContainer from "./DevInfoContainer.js";
import CallToActionButtons from "./CallToActionButtons.js";
import ReviewsContainer from "./ReviewsContainer.js";
import AboutLarissaContainer from "./AboutLarissaContainer.js";
import LanguagesPanel from "./LanguagesPanel.js";

export default class RightContainer extends Component {
  render() {
    return (
      <div className="right-container">
        <DevInfoContainer />
        <CallToActionButtons />
        <ReviewsContainer />
        <AboutLarissaContainer />
        <LanguagesPanel />
      </div>
    );
  }
}
