import React, { Component } from "react";
import Navbar from "./Navbar.js";
import LeftContainer from "./LeftContainer.js";
import RightContainer from "./RightContainer.js";
import Footer from "./Footer.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-content">
          <LeftContainer />
          <RightContainer />
        </div>
        <Footer />
      </div>
    );
  }
}
