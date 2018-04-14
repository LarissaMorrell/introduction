import React, { Component } from "react";

export default class AboutExperience extends Component {
  render() {
    return (
      <div className="about-container">
        <div>
          <h3>
            STEM Teacher
            <span className="dates">2013-2017</span>
          </h3>
          <h4>Linden STEAM Academy</h4>
          <p>
            Lead Teacher Trainer for Project Lead the Way, Launch curriculum.
            Design and implement curriculum for 500+ students in grades K - 4.
            Hands-on, project-based learning with a heavy focus on engineering.
            Students are taught to collaborate, plan, design, and implement
            their own solutions to STEM challenges. Independently raised over
            $8000 of materials for the classroom through grants and
            <a
              href="https://www.donorschoose.org/fundingsupport"
              alt="Larissa's Donors Choose"
              target="_blank"
            >
              DonorsChoose.org
            </a>.
          </p>
        </div>
        <hr />
        <div>
          <h3>
            Computer Teacher
            <span className="dates">2015-2016</span>
          </h3>
          <h4>Neighborhood House Charter School</h4>
          <p>
            Lead professional development in technology for teachers/admin.
            Taught grades 2-8 various technologies including courses in HTML &
            CSS, Microsoft Office, and programming concepts. Main point of
            contact between school administration and Network Administrator.
            Regular maintenance and updating of the website for NHCS and class
            website. Regularly troubleshooted various forms of technology
            throughout the school, including training of key personnel to also
            perform setup and troubleshooting tasks on multiple technologies.
          </p>
        </div>
        <hr />
        <div>
          <h3>
            Math Teacher
            <span className="dates">2009-2011</span>
          </h3>
          <h4>Beacon Charter High School for the Arts</h4>
          <p>
            Aided many teachers with incorporation of various technologies into
            lessons & projects. Helped many teachers troubleshoot problems with
            software and operating system errors.
          </p>
        </div>
        <hr />
        <div>
          <h3>
            Math Teacher
            <span className="dates">2006-2009</span>
          </h3>
          <h4>Mt. Hope High School</h4>
          <p>
            Designed & led regular professional development in technology for
            the math department. Built/maintained multiple class websites.
          </p>
        </div>
      </div>
    );
  }
}
