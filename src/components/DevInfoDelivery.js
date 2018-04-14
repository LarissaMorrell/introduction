import React, { Component } from "react";

export default class DevInfoPricing extends Component {
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
      <div>
        <div className="delivery-info">
          <img src="./media/delivery-truck.png" alt="delivery" />
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
          <a
            href="https://www.google.com/maps/dir/1135+Main+St,+Reading,+MA+01867/4+Copley+Pl+7th+floor,+Boston,+MA+02116/@42.4413758,-71.2135469,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89e30b7be4535a9d:0x51c1e35d3cef762a!2m2!1d-71.1038643!2d42.544497!1m5!1m1!1s0x89e37a0de91b2d5f:0xf2643a08a644865!2m2!1d-71.0783565!2d42.3471179!3e0"
            target="_blank"
            rel="noopener noreferrer"
          >
            4 Copley Place, 7th floor, Boston, MA 02116
          </a>
        </div>
      </div>
    );
  }
}
