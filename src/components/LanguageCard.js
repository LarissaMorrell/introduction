import React, { Component } from "react";
import StarRating from "./StarRating.js";

export default class LanguageCard extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="language-logo"
          src={`./media/${this.props.language.toLowerCase()}-logo.png`}
          alt={`${this.props.language}`}
        />
        <h3>{this.props.language}</h3>
        <StarRating rating={[this.props.rating]} />
        <a
          className="primary-button full-width button-styling"
          href="https://github.com/LarissaMorrell"
          alt="git hub portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>
    );
  }
}
