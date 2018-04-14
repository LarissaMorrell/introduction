import React, { Component } from "react";

export default class SocialMediaIcon extends Component {
  render() {
    // let github = {
    //   src: "./media/github.png",
    //   href: "https://github.com/LarissaMorrell"
    // };

    return (
      <div className="social-media-icon">
        <a className="social-media-icon" href={this.props.link}>
          <img src={`./media/${this.props.name}.png`} alt={this.props.name} />
        </a>
      </div>
    );
  }
}
