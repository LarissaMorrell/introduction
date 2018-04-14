import React, { Component } from "react";
import SocialMediaIcon from "./SocialMediaIcon.js";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-3">
            <h2>Streaming Now...</h2>
            <ul>
              <li>Black Mirror</li>
              <li>Game of Thrones</li>
              <li>Speechless</li>
              <li>Santa Clarita Diet</li>
              <li>Orange is the New Black</li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Wishlist</h2>
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
              <li>
                <a href="larissamorrell.com">Place holder</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Contact Her</h2>
            <button>
              <i className="fas fa-phone" /> Call Her
            </button>
            <ul>
              <li>
                Portfolio:{` `}
                <a href="https://larissamorrell.com">LarissaMorrell.com</a>
              </li>
              <li>
                Email: {` `}
                <a
                  href="mailto:larissa@larissamorrell.com?Subject=Wayfair%20is%20Interested"
                  alt="email Larissa"
                >
                  larissa@larissamorrell.com
                </a>
              </li>
              <li>
                <SocialMediaIcon
                  name="linkedin"
                  link="https://www.linkedin.com/in/larissamorrell/"
                />
                <SocialMediaIcon
                  name="github"
                  link="https://github.com/LarissaMorrell"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer-fine-print">
          <p>Easy commute to Boston from Reading, MA</p>
        </div>
      </footer>
    );
  }
}
