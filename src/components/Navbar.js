import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="navbar">
          <div className="outer" />
          <div className="inner">
            <div className="logo">
              <a href="http://larissamorrell.com">
                <img
                  className="header-logo"
                  src="media/wayfair-logo.png"
                  alt="wayfair logo"
                />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
