import React, { Component } from "react";
import Navbar from "./Navbar.js";
import LeftContainer from "./LeftContainer.js";
import RightContainer from "./RightContainer.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LeftContainer className="left-container" />
        <RightContainer className="right-container" />
      </div>
    );
  }
}
