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
            <h2>Recent Adventures</h2>
            <ul>
              <li>
                <a href="https://ridabockglass.com/" alt="Luke Adams Glass">
                  Glassblowing Lessons
                </a>
              </li>
              <li>
                <a href="https://getaway.house/" alt="Getaway">
                  Tiny House Forest Getaway
                </a>
              </li>
              <li>
                <a
                  href="http://whataboutus.pinkspage.com/"
                  alt="pink beautiful trauma tour"
                >
                  P!nk in Concert
                </a>
              </li>
              <li>
                <a
                  href="http://www.mysterylounge.com/Home.html"
                  alt="Mystery Lounge"
                >
                  Magic Comedy Shows
                </a>
              </li>
              <li>
                <a
                  href="https://www.attitash.com/ziptour/"
                  alt="Attitash Ziplining"
                >
                  Ziplining in NH
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Contact Her</h2>
            <button className="secondary-button">
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
