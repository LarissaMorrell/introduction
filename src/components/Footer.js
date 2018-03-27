import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="grid-row">
          <h2>About Her</h2>
          <ul>
            <li>
              <a href="larissamorrell.com">Place holder</a>
            </li>
            <li>
              <a href="larissamorrell.com">Place holder</a>
            </li>
            <li>
              <a href="larissamorrell.com">Place holder</a>
            </li>
            <li>
              <a href="larissamorrell.com">Place holder</a>
            </li>
          </ul>
        </div>
        <div className="grid-row">
          <h2>Favorite Hobbies</h2>
          <ul>
            <li>
              <a href="larissamorrell.com">Place holder</a>
            </li>
            <li>
              <a href="larissamorrell.com">Place holder</a>
            </li>
            <li>
              <a href="larissamorrell.com">Place holder</a>
            </li>
            <li>
              <a href="larissamorrell.com">Place holder</a>
            </li>
          </ul>
        </div>
        <div className="grid-row">
          <h2>Contact Her</h2>
          <button>
            <i className="fas fa-phone" /> Call Her
          </button>
          <ul>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
            <li>placeholder</li>
          </ul>
        </div>
        <div className="footer-fine-print">
          <ul>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
          <p>Easy commute to Boston from Reading, MA</p>
        </div>
      </div>
    );
  }
}
