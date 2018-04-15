import React, { Component } from "react";
import Slider from "react-slick";
import LanguageCard from "./LanguageCard.js";

export default class LanguagesPanel extends Component {
  render() {
    let settings = {
      arrows: true,
      infinite: true,
      slidesToShow: this.props.windowWidth > 768 ? 5 : 7,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 1800
    };

    let cards = [
      {
        language: "React",
        rating: 5
      },
      {
        language: "Redux",
        rating: 4
      },
      {
        language: "Javascript",
        rating: 5
      },
      {
        language: "HTML",
        rating: 5
      },
      {
        language: "CSS",
        rating: 5
      },
      {
        language: "jQuery",
        rating: 5
      },
      {
        language: "Java",
        rating: 4
      },
      {
        language: "Node",
        rating: 4
      }
    ];

    let slides = cards.map(card => {
      return (
        <div className="language-card-container">
          <LanguageCard language={card.language} rating={card.rating} />
        </div>
      );
    });

    return (
      <Slider {...settings} className="languages-panel">
        {slides}
      </Slider>
    );
  }
}
