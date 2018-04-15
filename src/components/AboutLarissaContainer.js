import React, { Component } from "react";
import CollapsiblePanel from "./CollapsiblePanel.js";
import AboutDescription from "./AboutDescription.js";
import AboutSkills from "./AboutSkills.js";
import AboutEducation from "./AboutEducation.js";
import AboutExperience from "./AboutExperience.js";

export default class AboutLarissaContainer extends Component {
  render() {
    return (
      <div className="about-larissa-container">
        <h2>More About Larissa</h2>
        <CollapsiblePanel
          title="Description"
          panelComponent={<AboutDescription />}
        />
        <CollapsiblePanel title="Skills" panelComponent={<AboutSkills />} />
        <CollapsiblePanel
          title="Education"
          panelComponent={<AboutEducation />}
        />
        <CollapsiblePanel
          title="Bringing a Unique Perspective..."
          panelComponent={<AboutExperience />}
        />
      </div>
    );
  }
}
