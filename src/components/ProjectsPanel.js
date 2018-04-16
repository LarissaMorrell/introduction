import React, { Component } from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard.js";

export default class ProjectsPanel extends Component {
  getNumberOfSlides(width) {
    if (width > 768) {
      return 2;
    } else if (width > 518) {
      return 3;
    } else {
      return 2;
    }
  }
  render() {
    let settings = {
      arrows: true,
      infinite: true,
      slidesToShow: this.getNumberOfSlides(this.props.windowWidth),
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: false,
      autoplay: false
    };

    return (
      <div>
        <h2>Recent Projects</h2>
        <Slider {...settings} className="languages-panel">
          <div className="card-container">
            <ProjectCard
              project={"Vintner"}
              file={"vintner.png"}
              demo="https://vintner.netlify.com"
              repo="https://github.com/LarissaMorrell/vintner"
              description="Read and write reviews of drinks from local breweries, wineries, and more."
            />
          </div>
          <div className="card-container">
            <ProjectCard
              project={"MrktTracker"}
              file={"mrkttracker.png"}
              demo="https://mrkt-tracker.herokuapp.com/"
              repo="https://github.com/LarissaMorrell/mrkt-tracker"
              description="Helping retail sales personnel organize information for each store location."
            />
          </div>
          <div className="card-container">
            <ProjectCard
              project={"TrailForecaster"}
              file={"trailforecaster.jpg"}
              demo="https://larissamorrell.github.io/trail-forecaster/"
              repo="https://github.com/LarissaMorrell/trail-forecaster"
              description="Use recent and forecasted weather to find hiking trails with the best conditions."
            />
          </div>
          <div className="card-container">
            <ProjectCard
              project={"Mt. Washington Quiz"}
              file={"mtwashington.jpg"}
              demo="https://larissamorrell.github.io/quiz-app/"
              repo="https://github.com/LarissaMorrell/quiz-app"
              description="How much do you know about Mount Washington? Test your knowledge with this quiz."
            />
          </div>
        </Slider>
      </div>
    );
  }
}
