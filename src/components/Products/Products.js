import React from "react";
import "./Products.scss";

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
      <h2 className="header text-center">Cilindri Hidraulici Telescopici</h2>
      <div className="container text-wrapper">
        <p>
          Întreaga gamă de Cilindri Telescopici Hidraulici, din stocul nostru,
          este realizată cu materiale de calitate superioară și cu tehnici de
          construcție de ultimă generație care permit performanțe și
          durabilitate mai mare.
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
      <div className="products-wrapper text-center">
        <div className="row">
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper"
          >
            <img src={SphereHeader}></img>
            <div className="overflow"><h3 className="hover-text text-center">Cilindri cu Sferă</h3></div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper"
          >
            <img src={SphereHeaderP}></img>
            <div className="overflow"><h3 className="hover-text text-center">Cilindri cu Sferă Serie P</h3></div>
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
            className="col img-wrapper"
          >
            <img src={SphereHeaderQ}></img>
            <div className="overflow"><h3 className="hover-text text-center">Cilindri cu Sferă  Serie Q</h3></div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper"
          >
            <img src={EyeHeader}></img>
            <div className="overflow"><h3 className="hover-text text-center">Cilindri Cu Ochi</h3></div>
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
            className="col img-wrapper"
          >
            <img src={EyeHeaderP}></img>
            <div className="overflow"><h3 className="hover-text text-center">Cilindri Cu Ochi Serie P</h3></div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              originX: 0,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="col img-wrapper"
          >
            <img src={UnderNutHeader}></img>
            <div className="overflow"><h3 className="hover-text text-center">Cilindri Sub Benă</h3></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
