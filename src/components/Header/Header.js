import React from "react";

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
      <Link className="btn products-offer shadow-none" to="/products">
        Produse
      </Link>
      <Link className="btn contact-offer shadow-none" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Header;
