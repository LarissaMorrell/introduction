import React, { Component } from "react";

export default class AboutEducation extends Component {
  render() {
    return (
      <div className="about-container">
        <div>
          <h3>Full Stack Web Development</h3>
          <h4>
            Thinkful
            <span className="dates">2017-2018</span>
          </h4>
          <p>
            Completed intensive course on modern full stack web development.
            Learning industry best practices and practical software development
            standards by collaborating several hours each week with a senior web
            developer. Technologies include HTML5, CSS3, JavaScript/ES6, jQuery,
            React, Redux, Node, Express, MongoDB, and Mongoose. Unit and
            integration tests used Mocha, Chai, Jest, and Enzyme. Projects have
            also used APIs, GIT, and GitHub.
          </p>
        </div>
        <hr />
        <div>
          <h3>Computer Science Certificate (Java)</h3>
          <h4>
            Boston University
            <span className="dates">2015-2016</span>
          </h4>
          <p>
            GPA 3.82. Enrolled and excelled in Java classes to learn more about
            object-oriented programming. Created projects which used
            polymorphism, inheritance, Java libraries, threads, interfaces,
            exception handling, various data structures, bit-wise operations,
            and more.
          </p>
        </div>
        <hr />
        <div>
          <h3>Masters Degree, Instructional Technology</h3>
          <h4>
            Lesley University
            <span className="dates">2011-2012</span>
          </h4>
          <p>GPA 4.0. Classes included HTML5 and CSS3.</p>
        </div>
        <hr />
        <div>
          <h3>Mathematics Education</h3>
          <h4>
            WV Wesleyan College
            <span className="dates">2002-2006</span>
          </h4>
          <p>GPA 3.14. Alpha Phi Omega (Community Service Fraternity)</p>
        </div>
      </div>
    );
  }
}
