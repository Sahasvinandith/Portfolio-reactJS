import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Sahas vinanditha wedisinghe </span>
            from <span className="purple"> Horana, Sri lanka.</span>
            <br />
            I am currently an undergraduate student at <span className="purple">Department of Computer Engineering, Faculty of Engineering</span>, Faculty of Engineering, University of Sri Jayawardenapura.
    
            <br />
            <br />
            Apart from coding,I love to !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Solve CTF challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
