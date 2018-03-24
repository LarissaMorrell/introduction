import React, { Component } from "react";
import ProductOverview from "./ProductOverview.js";

export default class CollapsibleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO add arrow for smaller screen size
      //TODO pass in props different cardContents
      expandIcon: true,
      cardContent: <ProductOverview />
    };
    this.addDetails = this.addDetails.bind(this);
  }
  addDetails() {
    let newState = Object.assign({}, this.state, {
      expandIcon: !this.state.expandIcon
    });
    this.setState(newState);
  }

  render() {
    return (
      <div className="collapsible-card">
        <button onClick={() => this.addDetails()}>
          <h2>{this.props.title}</h2>
          <span className="expand-icon">
            {this.state.expandIcon ? "+" : "-"}
          </span>
        </button>
        {this.state.expandIcon ? this.state.cardContent : null}
      </div>
    );
  }
}

//
