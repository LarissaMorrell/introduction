import React, { Component } from "react";

export default class CallButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: false
    };
  }

  toggleNumberDisplay() {
    this.setState({ displayNumber: !this.state.displayNumber });
  }
  render() {
    return (
      <button
        className="secondary-button secondary-green-button"
        onClick={() => this.toggleNumberDisplay()}
      >
        <i className="fas fa-phone" />
        {` Call ${this.state.displayNumber ? "(978) 276-4248" : "her"}`}
      </button>
    );
  }
}
