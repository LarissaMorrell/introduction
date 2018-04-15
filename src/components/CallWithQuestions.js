import React, { Component } from "react";
import CallButton from "./CallButton.js";

export default class CallWithQuestions extends Component {
  render() {
    return (
      <div className="call-questions-container">
        Do you have any questions for Larissa?<br />
        She will be happy to talk to you!
        <CallButton />
      </div>
    );
  }
}
