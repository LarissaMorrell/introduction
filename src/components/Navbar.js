import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="navbar">
          <div className="outer">
            Available to make amazing contributions to your team
          </div>
          <div className="inner">
            <div className="logo">
              <a href="http://larissamorrell.com">
                <img
                  className="header-logo"
                  src="media/wayfair-logo.png"
                  alt="wayfair logo"
                />
              </a>
              <div className="float-right">
                <input type="search" placeholder="Insert dreams quote here" />
                <button className="camera-search secondary-purple-button">
                  <i class="fas fa-camera" />
                </button>
                <ul>
                  <li>
                    <i class="fa fa-user" aria-hidden="true" />
                    <span> Profile</span>
                  </li>
                  <li>
                    <i class="fas fa-shopping-cart" />
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
// <div className="magnifying-glass">
//   <i class="fas fa-search" />
// </div>
