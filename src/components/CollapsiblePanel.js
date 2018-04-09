import React, { Component } from "react";
import CollapsiblePanelContent from "./CollapsiblePanelContent.js";

export default class CollapsiblePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO add arrow for smaller screen size
      showContent: false,
      panelContent: this.props.panelComponent
    };
  }
  addDetails() {
    let newState = Object.assign({}, this.state, {
      showContent: !this.state.showContent
    });
    this.setState(newState);
  }

  render() {
    let showContent = this.state.showContent;

    //TODO fix font-awesome bug ... Why won't it work for fa icon?
    return (
      <div className="collapsible-panel">
        <button className="collapse-button" onClick={() => this.addDetails()}>
          <h3>{this.props.title}</h3>
          <span className="collapse-button-icon black-font">
            {showContent ? "-" : "+"}
          </span>
        </button>
        {showContent ? (
          <CollapsiblePanelContent content={this.state.panelContent} />
        ) : null}
      </div>
    );
  }
  // <i className={`fas fa-${showContent ? "minus" : "plus"}`} />
  //<i className={`fas fa-${showContent ? "minus" : "plus"}`} />
}
