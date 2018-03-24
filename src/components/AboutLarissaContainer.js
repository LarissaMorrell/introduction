import React, { Component } from "react";
import CollapsiblePanel from "./CollapsiblePanel.js";
import AboutSkills from "./AboutSkills.js";

export default class AboutLarissaContainer extends Component {
  render() {
    return (
      <div>
        <h2>More About Larissa</h2>
        <CollapsiblePanel title="Skills" panelComponent={<AboutSkills />} />
      </div>
    );
  }
}
