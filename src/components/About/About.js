import React from "react";
import "./About.scss";

import logo from "../../assets/img/logoSmall.png";

const About = () => {
  return (
    <div id="about" className="container about-wrapper py-5">
      <div className="row content">
        <div className="col-lg-6 col-xm-12 d-flex justify-content-center">
          <div className="img-wrapper">
            <img className="about-img" src={logo} alt="author..."></img>
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
              tonaj de la 3,5 tone la 100 tone), Pompe hidraulice (pentru
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
              Suntem reprezentant oficial, autorizat pentru CUS Hydraulics.
            </p>

            <h4 id="about-subHeader" className="about-header">
              C.U.S. HYDRAULICS S.R.L.
            </h4>
            <p className="about-p">
              C.U.S. Meccanica snc a fost înființată in anul 1976 activand in
              construcția de piese mecanice pentru terți. În câțiva ani a găsit
              calea excelenței în specializarea cilindrilor telescopici pentru
              basculante, reușind să câștige imediat încrederea și interesul
              unei felii importante din piața italiană și externă.
            </p>

            <p className="about-p">
              De peste 40 de ani, design italian și măiestrie de calitate.
              Întregul proces de producție este intern companiei, cu o atenție
              deosebită la detalii și o mare atenție la toate etapele de
              prelucrare...
            </p>

            <p>Link Oficial: <a className="cus-link" href="https://cushydraulics.it/" alt="CUS Hydrauliucs">https://cushydraulics.it/</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
