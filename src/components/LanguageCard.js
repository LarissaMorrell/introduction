import React, { Component } from "react";

export default class LanguageCard extends Component {
  render() {
    return (
      <div>
        <img src={`./media/${this.props.language.toLowerCase()}-logo.png`} />
        <h3>{this.props.language}</h3>
      </div>
    );
  }
}
