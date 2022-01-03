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
            DESPRE NOI
          </h3>

          <div className="text-wrapper">
            <h4 id="about-subHeader" className="about-header">
              Euro Kit Hidraulica
            </h4>
            <p className="about-p">
              Suntem o companie cu experienta in a satisface clientii care au
              nevoie de truse de basculare. Stocul nostru include: Cilindri
              basculanți (pentru autoutilitare, Camioane și Semiremorci, cu un
              tonaj de la 7,5 tone la 100 tone), Pompe hidraulice (pentru
              excavatoare, camioane, etc.), Cuplaje cutie de viteze,
              Distribuitoare hidraulice și o gamă de accesorii pentru a completa
              aceste Kituri.
            </p>
            <p className="about-p">
              Vindem produse din import cu factura si garantie. Produsele
              noastre sunt certificate europene. Oferim consultanta in alegerea
              produsului potrivit.
            </p>

            <p className="about-p">
              Suntem reprezentanți oficiali ai CUS Hydraulics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
