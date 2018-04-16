import React, { Component } from "react";

export default class NavDropdownProfile extends Component {
  render() {
    return (
      <div className="contactInfo">
        <ul>
          <li>
            <i className="fas fa-envelope" /> larissa@larissamorrell.com
          </li>
          <li>
            <i className="fas fa-phone" /> (978) 276-4248
          </li>
        </ul>
      </div>
    );
  }
}
