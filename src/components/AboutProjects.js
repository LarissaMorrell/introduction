import React, { Component } from "react";

export default class AboutProjects extends Component {
  render() {
    return (
      <div className="about-container">
        <p>
          Allow me to introduce myself... My name is Larissa Morrell and I have
          been programming for the last 3 years. What started out as a hobby
          while teaching full time, has blossomed into a passion for building
          web apps and learning everything I can about code.
        </p>
        <p>
          For the last 11 years I taught students spanning grades K-12, in a
          variety of STEM contents. My first taste of code was a HTML/CSS course
          while pursuing my {`Master's`} Degree, and I loved it so much I
          completed a Computer Science certificate in Java. Before I knew it, I
          made the decision to leave teaching and enrolled in{" "}
          <a
            href="https://www.thinkful.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thinkful
          </a>
          {`'s`} Full Stack Web Development Bootcamp.
        </p>
        <p>
          Having recently graduated, I am excited to be pursuing this new path
          in life.
        </p>
      </div>
    );
  }
}
