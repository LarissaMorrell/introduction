import React, { Component } from "react";

export default class CollapsiblePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingDetails: false
    };
  }

  showingDetailsToggle() {
    let newState = Object.assign({}, this.state, {
      showingDetails: !this.state.showingDetails
    });
    this.setState(newState);
  }

  render() {
    let showingDetails = this.state.showingDetails;
    return (
      <div className="collapsible-panel-details-container">
        <div className={showingDetails ? "full-view" : "partial-view"}>
          {this.props.content}
        </div>
        {showingDetails ? null : <div id="gradient" />}
        <button
          className="link-styling"
          onClick={() => this.showingDetailsToggle()}
        >
          {showingDetails ? "Show Less" : "Show More"}
        </button>
      </div>
    );
  }
}
