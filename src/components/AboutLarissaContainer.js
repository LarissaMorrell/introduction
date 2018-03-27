import React, { Component } from "react";
import CollapsiblePanel from "./CollapsiblePanel.js";
import AboutSkills from "./AboutSkills.js";
import AboutEducation from "./AboutEducation.js";
import AboutExperience from "./AboutExperience.js";

export default class AboutLarissaContainer extends Component {
  render() {
    return (
      <div>
        <h2>More About Larissa</h2>
        <CollapsiblePanel title="Skills" panelComponent={<AboutSkills />} />
        <CollapsiblePanel
          title="Education"
          panelComponent={<AboutEducation />}
        />
        <CollapsiblePanel
          title="Work Experience"
          panelComponent={<AboutExperience />}
        />
      </div>
    );
  }
}
