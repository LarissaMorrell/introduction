import React, { Component } from "react";

export default class AboutSkills extends Component {
  render() {
    const skills = [
      "Javascript",
      "React",
      "Redux",
      "ES6",
      "HTML5",
      "CSS3",
      "jQuery",
      "Node",
      "Java",
      "MongoDB",
      "Mongoose",
      "Chai",
      "Mocha",
      "Jest"
    ];
    return (
      <div className="skills-container">
        {skills.map((skill, i) => {
          return (
            <button
              className="skill secondary-button secondary-green-button"
              key={i}
            >
              {skill}
            </button>
          );
        })}
      </div>
    );
  }
}
