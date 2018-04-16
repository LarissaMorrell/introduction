import React, { Component } from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard.js";

export default class ProjectsPanel extends Component {
  render() {
    let settings = {
      arrows: true,
      infinite: true,
      slidesToShow: this.props.windowWidth > 768 ? 2 : 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      centerMode: false,
      autoplay: false
    };

    return (
      <div>
        <h3>Recent Projects</h3>
        <Slider {...settings} className="languages-panel">
          <div className="card-container">
            <ProjectCard
              project={"Vintner"}
              file={"vintner.png"}
              demo="https://vintner.netlify.com"
              description="Read and write reviews of drinks from local breweries, wineries, and more."
            />
          </div>
          <div className="card-container">
            <ProjectCard
              project={"MrktTracker"}
              file={"mrkttracker.png"}
              demo="https://mrkt-tracker.herokuapp.com/"
              description="Helping retail sales personnel organize information for each store location."
            />
          </div>
          <div className="card-container">
            <ProjectCard
              project={"TrailForecaster"}
              file={"trailforecaster.jpg"}
              demo="https://mrkt-tracker.herokuapp.com/"
              description="Use recent and forecasted weather to find hiking trails with the best conditions."
            />
          </div>
          <div className="card-container">
            <ProjectCard
              project={"Mt. Washington Quiz"}
              file={"mtwashington.jpg"}
              demo="https://mrkt-tracker.herokuapp.com/"
              description="How much do you know about Mount Washington? Test your knowledge with this quiz."
            />
          </div>
        </Slider>
      </div>
    );
  }
}
