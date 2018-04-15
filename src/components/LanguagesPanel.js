import React, { Component } from "react";
import Slider from "react-slick";
import LanguageCard from "./LanguageCard.js";

export default class LanguagesPanel extends Component {
  render() {
    let settings = {
      arrows: true,
      infinite: true,
      slidesToShow: this.props.windowWidth > 768 ? 5 : 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 1800
    };
    console.log(settings.slidesToShow);
    return (
      <Slider {...settings} className="languages-panel">
        <div className="language-card-container">
          <LanguageCard language="React" rating={5} />
        </div>
        <div className="language-card-container">
          <LanguageCard language="Redux" rating={4} />
        </div>
        <div className="language-card-container">
          <LanguageCard language="Javascript" rating={4.5} />
        </div>
        <div className="language-card-container">
          <LanguageCard language="HTML" rating={5} />
        </div>
        <div className="language-card-container">
          <LanguageCard language="CSS" rating={5} />
        </div>
        <div className="language-card-container">
          <LanguageCard language="jQuery" rating={5} />
        </div>
        <div className="language-card-container">
          <LanguageCard language="Java" rating={4} />
        </div>
        <div className="language-card-container">
          <LanguageCard language="Node" rating={3.5} />
        </div>
      </Slider>
    );
  }
}
