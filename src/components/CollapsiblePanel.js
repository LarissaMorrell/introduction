import React, { Component } from "react";

export default class CollapsiblePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO add arrow for smaller screen size
      //TODO pass in props different panelContents
      expandIcon: true,
      showContent: false,
      panelContent: this.props.panelComponent,
      showMoreDetails: false
    };
    this.addDetails = this.addDetails.bind(this);
  }
  addDetails() {
    let newState = Object.assign({}, this.state, {
      expandIcon: !this.state.expandIcon
    });
    console.log(this.state.panelContent);
    this.setState(newState);
  }
  showContentToggle() {
    let newState = Object.assign({}, this.state, {
      showContent: !this.state.showContent
    });
    this.setState(newState);
  }
  showMoreDetailsToggle() {
    let newState = Object.assign({}, this.state, {
      showMore: !this.state.showMoreDetails
    });
    this.setState(newState);
  }

  render() {
    let content = () => {
      if (this.props.showContent) {
        return (
          <div
            className="collapsible-panel-details-container"
            onClick={() => this.showContentToggle()}
          >
            {this.state.expandIcon ? null : this.state.panelContent}
            <button onClick={() => this.showMoreDetailsToggle()}>
              {this.state.showMoreDetails ? "Show Less" : "Show More"}
            </button>
          </div>
        );
      } else {
        return;
      }
    };

    return (
      <div className="collapsible-panel">
        <button onClick={() => this.addDetails()}>
          <h3>{this.props.title}</h3>
          <span className="expand-icon">
            {this.state.expandIcon ? "+" : "-"}
          </span>
        </button>
        {content}
      </div>
    );
  }
}

//
