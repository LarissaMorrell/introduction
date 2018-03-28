import React, { Component } from "react";

export default class LanguageCard extends Component {
  render() {
    return (
      <div>
        <img
          className="language-logo"
          src={`./media/${this.props.language.toLowerCase()}-logo.png`}
          alt={`${this.props.language}`}
        />
        <h3>{this.props.language}</h3>
      </div>
    );
  }
}
