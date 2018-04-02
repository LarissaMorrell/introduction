import React, { Component } from "react";
import Slider from "react-slick";
import LanguageCard from "./LanguageCard.js";

export default class LanguagesPanel extends Component {
  render() {
    let settings = {
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true
    };

    return (
      <Slider {...settings} className="test">
        <div>
          <LanguageCard language="React" skill-level={5} />
        </div>
        <div>
          <LanguageCard language="Javascript" skill-level={4} />
        </div>
        <div>
          <LanguageCard language="HTML" skill-level={5} />
        </div>
        <div>
          <LanguageCard language="CSS" skill-level={5} />
        </div>
        <div>
          <LanguageCard language="Node" skill-level={3.5} />
        </div>
        <div>
          <LanguageCard language="Java" skill-level={4} />
        </div>
      </Slider>
    );
  }
}
