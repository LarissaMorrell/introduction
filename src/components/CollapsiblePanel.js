import React, { Component } from "react";

export default class CollapsiblePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO add arrow for smaller screen size
      showContent: false,
      panelContent: this.props.panelComponent,
      showMoreDetails: false
    };
  }
  addDetails() {
    let newState = Object.assign({}, this.state, {
      showContent: !this.state.showContent
    });
    this.setState(newState);
  }
  showMoreDetailsToggle() {
    let newState = Object.assign({}, this.state, {
      showMoreDetails: !this.state.showMoreDetails
    });
    this.setState(newState);
  }

  render() {
    let showContent = this.state.showContent;
    let content = (
      <div className="collapsible-panel-details-container">
        {showContent ? this.state.panelContent : null}
        <button onClick={() => this.showMoreDetailsToggle()}>
          {this.state.showMoreDetails ? "Show Less" : "Show More"}
        </button>
      </div>
    );

    return (
      <div className="collapsible-panel">
        <button onClick={() => this.addDetails()}>
          <h3>{this.props.title}</h3>
          <span className="expand-icon">{showContent ? "-" : "+"}</span>
        </button>
        {showContent ? content : null}
      </div>
    );
  }
}
