import React, { Component } from "react";

export default class CollapsiblePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO add arrow for smaller screen size
      //TODO pass in props different panelContents
      expandIcon: true,
      panelContent: this.props.panelComponent,
      showMore: false
    };
    this.addDetails = this.addDetails.bind(this);
  }
  addDetails() {
    let newState = Object.assign({}, this.state, {
      expandIcon: !this.state.expandIcon
    });
    this.setState(newState);
  }
  showMoreDetailsToggle() {
    let newState = Object.assign({}, this.state, {
      showMore: !this.state.showMore
    });
    this.setState(newState);
  }

  render() {
    return (
      <div className="collapsible-panel">
        <button onClick={() => this.addDetails()}>
          <h3>{this.props.title}</h3>
          <span className="expand-icon">
            {this.state.expandIcon ? "+" : "-"}
          </span>
        </button>
        <div className="collapsible-panel-details-container">
          {this.state.expandIcon ? this.state.panelContent : null}
          <button onClick={() => this.showMoreDetailsToggle()}>
            {this.state.showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    );
  }
}

//
