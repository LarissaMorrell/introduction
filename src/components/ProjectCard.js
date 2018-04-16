import React, { Component } from "react";

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="card project-card">
        <img
          src={`./media/projects/${this.props.file}`}
          alt={`${this.props.project}`}
        />
        <h3>{this.props.project}</h3>
        <p>{this.props.description}</p>
        <div className="project-button">
          <a
            className="secondary-button secondary-purple-button button-styling"
            href={`https://github.com/LarissaMorrell/${this.props.project}`}
            alt={`${this.props.project} on git hub`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code" />
          </a>
          <a
            className="primary-button  button-styling"
            href={`${this.props.demo}`}
            alt={`demo of ${this.props.project}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe" />
          </a>
        </div>
      </div>
    );
  }
}
