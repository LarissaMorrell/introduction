import React, { Component } from "react";
import StarRating from "./StarRating.js";

export default class DeveloperInfoContainer extends Component {
  render() {
    let monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let dayArr = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    let day = tomorrow.getDay();
    let month = tomorrow.getMonth();
    let date = tomorrow.getDate();
    return (
      <div id="developer-info-container">
        <h1>Full Stack Developer</h1>
        <p>
          by
          <a href="https://larissamorrell.com" alt="larissa's portfolio">
            Larissa Morrell
          </a>
        </p>
        <StarRating rating={[5]} />
        <div>
          <span className="pricing red-font">$199.99 </span>
          <span className="strike-through">$100,000</span>
          <span className="red-font"> 48% Off</span>
        </div>
        <div>
          <span className="pricing red-font">Hire Today!</span>
        </div>
        <div className="delivery-info">
          <img src="./media/delivery-truck.png" />
          <p>FREE Next-Day Shipping!</p>
        </div>
        <div>
          Get Larissa by
          <span className="black-font">
            {` ${dayArr[day]}, ${monthArr[month]} ${date}`}
          </span>
        </div>
        <div>
          Ship To:
          <button className="link-styling">
            4 Copley Place, 7th floor, Boston, MA 02116
          </button>
        </div>
      </div>
    );
  }
}
