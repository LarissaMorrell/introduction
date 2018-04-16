import React, { Component } from "react";

export default class Navbar extends Component {
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
                  <li>
                    <i className="fa fa-user" aria-hidden="true" />
                    <span> Profile</span>
                  </li>
                  <li>
                    <i className="fas fa-shopping-cart" />
                    <span> Cart</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
