import React from "react";
import "./About.scss";

import home1 from "../../assets/img/home1.jpg";

const About = () => {
  return (
    <div id="about" className="container about-wrapper py-5">
      <div className="row content">
        <div className="col-lg-6 col-xm-12 d-flex justify-content-center">
          <div className="img-wrapper">
            <img className="about-img" src={home1} alt="author..."></img>
          </div>
        </div>

        <div className="col-lg-6 col-xm-12 about-text">
          <h3 className="header" id="title">
            OUR COMPANY
          </h3>

          <div className="text-wrapper">
            <h4 id="about-subHeader" className="about-header">
              Euro Kit Hidraulica
            </h4>
            <p className="about-p">
              We are a company with experience in satisfying customers who need
              tipping kits. Our stock includes: Tipping cylinders (for vans,
              Trucks and Semi-trailers, with a tonnage from 7.5 tons to 100
              tons.), Hydraulic pumps (for Excavators, trucks, etc.), Gearbox
              couplings, Hydraulic distributors and a range of accessories to
              complement those kits.
            </p>
            <p className="about-p">
              Our products are European certified. We offer consulting in
              choosing the right product.
            </p>

            <p className="about-p">
              We are an official representative of CUS Hydraulics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
