import React, { Component } from "react";
import Overlay from "./Overlay.js";
import NavDropdownProfile from "./NavDropdownProfile.js";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: null
    };
  }
  addDropdown(component) {
    this.setState({ dropdown: <Overlay component={component} /> });
  }
  removeDropdown() {
    this.setState({ dropdown: null });
  }
  render() {
    return (
      <div>
        <header className="navbar">
          <div className="outer">
            Available to make amazing contributions to your team
          </div>
          <div id="main-navbar">
            <div className="logo">
              <a href="http://larissamorrell.com" rel="noopener noreferrer">
                <img
                  className="header-logo"
                  src="media/wayfair-logo.png"
                  alt="wayfair logo"
                />
              </a>
              <div className="float-right">
                <form>
                  <span className="magnifying-glass">
                    <i className="fas fa-search" />
                  </span>
                  <input type="search" placeholder="Work hard. Dream Big." />
                </form>
                <button className="camera-search secondary-purple-button">
                  <i className="fas fa-camera" />
                </button>
                <ul>
                  <li
                    onMouseOver={() => this.addDropdown(<NavDropdownProfile />)}
                    onMouseOut={() => this.removeDropdown()}
                  >
                    <i className="fa fa-user" aria-hidden="true" />
                    <span> Profile</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope-open" />
                    <span> Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {this.state.dropdown}
        </header>
      </div>
    );
  }
}
