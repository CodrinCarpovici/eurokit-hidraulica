import React from "react";
import "./Navbar.scss";

//ICONS AND IMAGES
import logo from "../../assets/img/logo.png";

//COMPONENTS
import Search from "../Search/Search.js";
import Login from "../Login/Login.js";
import Language from "../Language/Language";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light fixed-top">
      {/* BRAND */}
      <div className="container-fluid nav-container">
        <div className="col-auto d-inline-block d-flex justify-content-center navbar-logo">
          <a className="navbar-brand" href="#">
            <img src={logo} id="logo" className="img-fluid mx-auto "></img>
          </a>
        </div>

        {/* HAMBURGER */}
        <div className="col-auto order-first">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/*NAV-LINKS */}
        <div className="col nav-links">
          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <img src={logo} id="logo-offcanvas"></img>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="#Home">
                  Home
                </a>
                <a className="nav-item nav-link" href="#About">
                  About
                </a>
                <a className="nav-item nav-link" href="#">
                  Products
                </a>
                <a className="nav-item nav-link" href="#">
                  Accessories
                </a>
                <a className="nav-item nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TOP LINKS */}
        <div className="col-auto d-flex justify-content-end top-right-links">

          {/*SEARCH */}
          <Search />

          {/* LOG IN */}

          <Login />

          {/* LANGUAGE */}
          <Language />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
