import React, { Component } from "react";
import LanguageCard from "./LanguageCard.js";

export default class LanguagesPanel extends Component {
  render() {
    return (
      <div>
        <LanguageCard language="React" skill-level={5} />
        <LanguageCard language="Javascript" skill-level={4} />
        <LanguageCard language="HTML" skill-level={5} />
        <LanguageCard language="CSS" skill-level={5} />
        <LanguageCard language="Node" skill-level={3.5} />
        <LanguageCard language="Java" skill-level={4} />
      </div>
    );
  }
}
