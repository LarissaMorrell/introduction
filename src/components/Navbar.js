import React, { Component } from "react";
import Overlay from "./Overlay.js";
import NavDropdownProfile from "./NavDropdownProfile.js";
import SocialMediaIcon from "./SocialMediaIcon.js";

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

                  <button className="camera-search secondary-purple-button">
                    <i className="fas fa-camera" />
                  </button>
                </form>
                <button>
                  <SocialMediaIcon
                    name="github"
                    link="https://github.com/LarissaMorrell"
                  />
                </button>
                <button>
                  <SocialMediaIcon
                    name="linkedin"
                    link="https://www.linkedin.com/in/larissamorrell/"
                  />
                </button>
                <button>
                  <a
                    href="https://larissamorrell.com"
                    target="_blank"
                    className="portfolio"
                  >
                    <i className="fas fa-briefcase" />
                    <span> Portfolio</span>
                  </a>
                </button>
                <button
                  className="contact-info"
                  onMouseOver={() => this.addDropdown(<NavDropdownProfile />)}
                  onMouseOut={() => this.removeDropdown()}
                >
                  <i className="fa fa-user" aria-hidden="true" />
                  <span> Contact</span>
                </button>
              </div>
            </div>
          </div>
          {this.state.dropdown}
        </header>
      </div>
    );
  }
}
