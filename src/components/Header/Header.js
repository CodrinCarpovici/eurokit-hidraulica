import React from "react";

import "./Header.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-intro start-50 translate-middle-x">
      <h1 className="title">Telescopic Hydraulic Cylinders</h1>
      <p className="header-text">
        We offer a wide range of telescopic cylinders <br />
        suited for any needs. Check out our Contact <br />
        section to let us know of your query and the
        <br />
        Products page to see our range.
      </p>
      <Link className="btn products-offer shadow-none" to="/products">
        Products
      </Link>
      <Link className="btn contact-offer shadow-none" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Header;
