import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-intro start-50 translate-middle-x">
      <h1 className="title">Cilindri Telescopici Hidraulici</h1>
      <p className="header-text">
        Oferim o gamă largă de cilindri telescopici hidraulici <br />
        potriviti pentru orice necesitate. Consultați pagina noastră <br />
        de Contact pentru a ne informa despre orice interese &nbsp;
        <br />
        și pagina Produse pentru a vedea gama noastră.
      </p>

      <div className="btn-group d-flex justify-content-center">
        <Link className="col btn products-offer shadow-none" to="/products">
          Produse
        </Link>

        <Link className="col btn accessories-offer shadow-none" to="/accessories">
          Accesorii
        </Link>

        <Link className="col btn contact-offer shadow-none" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
