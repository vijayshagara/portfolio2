import React from "react";
import "./About.css";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element id="about">
    <div className="about">
      <div className="aboutleft ">
        <img className="image" src="https://tse4.mm.bing.net/th?id=OIP.okpntE6Gmyzz79rbDrv3FgHaKK&pid=Api&P=0" />
      </div>
      <div className="aboutright col-sm-6">
        <h1>Hi, I’m Vijay</h1>
        <h4>I am a FULL STACK DEVELOPER.</h4>
        <span>
          A model is a person with a role either to promote, commercial products
          or to serve as a visual aid for works of art or to pose for
          photography. Though models
        </span>
        <input type="button" value="contactMe" />
      </div>
    </div>
    </Element>
  );
};

export default About;
