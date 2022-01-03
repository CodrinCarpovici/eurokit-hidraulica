import React from "react";
import "./Products.scss";

import { div, Link } from "react-router-dom";

//Images
import SphereHeader from "../../assets/img/SphereHeader.jpg";
import SphereHeaderP from "../../assets/img/SphereHeaderP.jpg";
import SphereHeaderQ from "../../assets/img/SphereHeaderQ.jpg";
import EyeHeader from "../../assets/img/EyeHeader.jpg";
import EyeHeaderP from "../../assets/img/EyeHeaderP.jpg";
import UnderNutHeader from "../../assets/img/UnderNutHeader.jpg";

import { motion } from "framer-motion";

const Products = () => {
  return (
    <div id="products">
      <div className="d-flex justify-content-center my-5">
        <h2 className="col-lg-6 col-xm-12 header text-center">Cilindri Hidraulici Telescopici</h2>
      </div>

      <div className="container text-wrapper">
        <p>
          Întreaga gamă de Cilindri Telescopici Hidraulici, din stocul nostru,
          este realizată cu materiale de calitate superioară și cu tehnici de
          construcție de ultimă generație care permit performanțe și
          durabilitate mai mari.
        </p>

        <p>
          Se folosesc țevi de oțel laminate la cald fără sudură care garantează
          o rezistență ridicată la tracțiune R = N / mm² 590 și o limită de
          curgere Rs = N / mm² 460. Ultima extensie, în schimb, este din laminat
          C45. Capacul și fundul sunt realizate cu ștanțare la cald în ASTM
          A105m / 97.
        </p>

        <p>
          Sistemul de prelucrare a tubului utilizează un proces care permite
          obținerea opritorului mecanic din tubul brut, funcționând atât din
          exterior, cât și din interior.
        </p>

        <p>
          Opritorul mecanic are avantajul de a avea o suprafață de sprijin mai
          largă și mai solidă, permițând blocarea extensiilor când sunt complet
          deschise.
        </p>
      </div>
      <div className="container products-wrapper text-center">
        <div className="row">
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper text-center d-flex justify-content-center"
          >
            <img className="image" src={SphereHeader}></img>
            <Link to="/sphereCylinders" className="overflow">
              <h3 className="hover-text text-center">Cilindri cu Sferă</h3>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper text-center d-flex justify-content-center"
          >
            <img className="image" src={SphereHeaderP}></img>
            <Link to="/sphereCylindersSeriesP" className="overflow">
              <h3 className="hover-text text-center">
                Cilindri cu Sferă Serie P
              </h3>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper text-center d-flex justify-content-center"
          >
            <img className="image" src={SphereHeaderQ}></img>
            <Link to="/sphereCylindersSeriesQ" className="overflow">
              <h3 className="hover-text text-center">
                Cilindri cu Sferă Serie Q
              </h3>
            </Link>
          </motion.div>
        </div>

        <div className="row">
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper text-center d-flex justify-content-center"
          >
            <img className="image" src={EyeHeader}></img>
            <Link to="/eyeCylinders" className="overflow">
              <h3 className="hover-text text-center">Cilindri Cu Ochi</h3>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper text-center d-flex justify-content-center"
          >
            <img className="image" src={EyeHeaderP}></img>
            <Link to="/eyeCylindersSeriesP" className="overflow">
              <h3 className="hover-text text-center">
                Cilindri Cu Ochi Serie P
              </h3>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper text-center d-flex justify-content-center "
          >
            <img className="image" src={UnderNutHeader}></img>
            <Link to="/underNutCylinders" className="overflow ">
              <h3 className="hover-text text-center">Cilindri Sub Benă</h3>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
