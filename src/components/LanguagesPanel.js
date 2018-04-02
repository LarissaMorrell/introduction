import React, { Component } from "react";
import Slider from "react-slick";
import LanguageCard from "./LanguageCard.js";

export default class LanguagesPanel extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <Slider {...settings} className="test">
        <LanguageCard language="React" skill-level={5} />
        <p className="language-card">yes</p>
        <LanguageCard language="React" skill-level={5} />
        <p>hi</p>
        <p>no</p>
      </Slider>
    );
  }
  // <LanguageCard language="React" skill-level={5} />
  // <LanguageCard language="Javascript" skill-level={4} />
  // <LanguageCard language="HTML" skill-level={5} />
  // <LanguageCard language="CSS" skill-level={5} />
  // <LanguageCard language="Node" skill-level={3.5} />
  // <LanguageCard language="Java" skill-level={4} />
}
