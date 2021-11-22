import React from "react";
import "./About.scss";

import truck2 from "../../assets/img/truck2.jpg";

const About = () => {
  return (
    <div id="about" className="container about-wrapper py-5">
      <div className="row content">
        <div className="col d-flex justify-content-center">
          <div className="img-wrapper">
            <img className="about-img" src={truck2} alt="author..."></img>
          </div>
        </div>

        <div className="col about-text">
          <h3 className="header" id="title">
            OUR COMPANY
          </h3>

          <div className="text-wrapper">
            <h4 id="about-subHeader" className="about-header">
              Euro Kit Hidraulica
            </h4>
            <p className="about-p">
              We have been operating since 2011 and have increased our stock
              tenfold since then.
            </p>
            <p className="about-p">
              We are an official representative of Cus-Hydraulics.<br/>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
