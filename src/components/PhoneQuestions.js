import React, { Component } from "react";

export default class PhoneQuestions extends Component {
  render() {
    return (
      <div className="phone-questions-container">
        Do you have any questions for Larissa?<br />
        She will be happy to talk to you!
        <button className="secondary-button secondary-green-button">
          <i className="fas fa-phone" /> Call Her
        </button>
      </div>
    );
  }
}
