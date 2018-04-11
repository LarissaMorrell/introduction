import React, { Component } from "react";
import CollapsiblePanelContent from "./CollapsiblePanelContent.js";

export default class CollapsiblePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
      panelContent: this.props.panelComponent,
      height: 0
    };
  }
  addDetails() {
    let newState = Object.assign({}, this.state, {
      showContent: !this.state.showContent
    });
    this.setState(newState);
  }
  getHeight() {
    const height = this.divElement.clientHeight;
    this.setState({ height });
  }

  componentDidMount() {
    this.getHeight();
    console.log(this.state.height);
  }

  render() {
    let showContent = this.state.showContent;

    return (
      <div
        className="collapsible-panel"
        ref={divElement => (this.divElement = divElement)}
      >
        <button className="collapse-button" onClick={() => this.addDetails()}>
          <h3>{this.props.title}</h3>
          <span className="collapse-button-icon black-font">
            {showContent ? (
              <img
                className="collapse-icon"
                src="./media/minus.png"
                alt="collapse"
              />
            ) : (
              <img
                className="collapse-icon"
                src="./media/plus.png"
                alt="expand"
              />
            )}
          </span>
        </button>
        {showContent ? (
          <CollapsiblePanelContent content={this.state.panelContent} />
        ) : null}
      </div>
    );
  }
}
