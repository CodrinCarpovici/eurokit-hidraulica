import React from "react";
import "./Accessories.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Images
import cotsHeader from "../../assets/img/cotsHeader.jpg";
import closedSupportHeader from "../../assets/img/closedSupportHeader.jpg";
import openSupportHeader from "../../assets/img/openSupportHeader.jpg";
import strokeHeader from "../../assets/img/strokeHeader.jpg";
import directionalValveHeader from "../../assets/img/directionalValveHeader.jpg";
import directionalHydraulicValveHeader from "../../assets/img/directionalHydraulicValveHeader.jpg";
import nutsHeader from "../../assets/img/nutsHeader.jpg";
import gasketKitHeader from "../../assets/img/gasketKitHeader.jpg";
import guideRingKitHeader from "../../assets/img/guideRingKitHeader.jpg";

const Accessories = () => {
  return (
    <div id="accessories">
      <div className="d-flex justify-content-center my-5">
        <h2 className="col-lg-6 col-xm-12 header text-center">Accesorii</h2>
      </div>

      <div className="container text-wrapper text-center">
        <h3>
          Accesorii pentru Cilindri Hidraulici Telescopici disponibile in stoc.
        </h3>
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
            <img className="image" src={cotsHeader}></img>
            <Link to="/Cots" className="overflow">
              <h3 className="hover-text text-center">Balama</h3>
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
            <img className="image" src={closedSupportHeader}></img>
            <Link to="/ClosedSupports" className="overflow">
              <h3 className="hover-text text-center">Suporturi Inchise</h3>
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
            <img className="image" src={openSupportHeader}></img>
            <Link to="/OpenSupports" className="overflow">
              <h3 className="hover-text text-center">Suporturi Deschise</h3>
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
            <img className="image" src={strokeHeader}></img>
            <Link to="/EndOfStrokeValve" className="overflow">
              <h3 className="hover-text text-center">
                Supape De Sfârșit De Cursă
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
            <img className="image" src={directionalValveHeader}></img>
            <Link to="/DIrectionalSolenoidValves" className="overflow">
              <h3 className="hover-text text-center">
                Supape Direcționale cu Solenoid
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
            <img className="image" src={directionalHydraulicValveHeader}></img>
            <Link to="/DirectionalHydraulicsValves" className="overflow">
              <h3 className="hover-text text-center">
                Supape Hidraulice Direcționale
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
            <img className="image" src={nutsHeader}></img>
            <Link to="/NutsKit" className="overflow">
              <h3 className="hover-text text-center">Kit chiocciole</h3>
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
            <img className="image" src={gasketKitHeader}></img>
            <Link to="/GasketKit" className="overflow">
              <h3 className="hover-text text-center">Kit Garnituri</h3>
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
            <img className="image" src={guideRingKitHeader}></img>
            <Link to="/GuideRingKit" className="overflow">
              <h3 className="hover-text text-center">Kit Inel De Ghid</h3>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
