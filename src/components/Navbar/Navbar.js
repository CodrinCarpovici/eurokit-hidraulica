import React from "react";
import "./Navbar.scss";

//ROUTER
import { Link } from "react-router-dom";

//ICONS AND IMAGES
import logo from "../../assets/img/logo.png";
import logoSmall from "../../assets/img/logoSmall.png";

//COMPONENTS
import Login from "../Login/Login.js";
import Language from "../Language/Language.js";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light fixed-top">
      {/* BRAND */}
      <div className="container-fluid nav-container">
        <div className="col-md-auto d-inline-block d-flex justify-content-center navbar-logo">
          <Link className="navbar-brand" to="/">
            <img src={logo} id="logo" className="img-fluid mx-auto "></img>
            <img src={logoSmall} className="img-fluid mx-auto small-logo"></img>
          </Link>
        </div>

        {/* HAMBURGER */}
        <div className="col-auto order-first">
          <button
            className="navbar-toggler hamburger"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon burger-icon"></span>
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
                <li data-bs-toggle="offcanvas">
                  <Link
                    className="nav-item nav-link d-flex justify-content-center"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li data-bs-toggle="offcanvas">
                  <Link
                    className="nav-item nav-link d-flex justify-content-center"
                    to="/about"
                  >
                    Despre&nbsp;Noi
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    className="nav-item nav-link dropdown-toggle text-center"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Produse
                  </a>
                  <ul
                    className="dropdown-menu text-center dropdown-menu-center"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/sphereCylinders">
                        Cilindri cu Sferă
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/sphereCylindersSeriesP"
                      >
                        Cilindri cu Sferă Serie P
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/sphereCylindersSeriesQ"
                      >
                        Cilindri cu Sferă Serie Q
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/eyeCylinders">
                        Cilindri cu Ochi
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/eyeCylindersSeriesP">
                        Cilindri cu Ochi Serie P
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/underNutCylinders">
                        Cilindri Sub Benă
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="nav-item nav-link dropdown-toggle text-center"
                    role="button"
                    id="dropdownMenuLink2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Accesorii
                  </a>
                  <ul
                    className="dropdown-menu text-center dropdown-menu-center"
                    aria-labelledby="dropdownMenuLink2"
                  >
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/Cots">
                        Balama
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/ClosedSupports">
                        Suporturi inchise
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/OpenSupports">
                        Suporturi Deschise
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/EndOfStrokeValve">
                        Supape De Sfârșit De Cursă
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/DIrectionalSolenoidValves"
                      >
                        Supape Direcționale cu Solenoid
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link
                        className="dropdown-item"
                        to="/DirectionalHydraulicsValves"
                      >
                        Supape Hidraulice Direcționale
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/NutsKit">
                        Kit Suport Sferă
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/GasketKit">
                        Kit Garnituri
                      </Link>
                    </li>
                    <li data-bs-toggle="offcanvas">
                      <Link className="dropdown-item" to="/GuideRingKit">
                        Kit Inel De Ghid
                      </Link>
                    </li>
                  </ul>
                </li>
                <li data-bs-toggle="offcanvas">
                  <Link
                    className="nav-item nav-link d-flex justify-content-center"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>

        {/* TOP LINKS */}
        <div className="col-md-auto d-flex justify-content-end top-right-links">
          {/* LOG IN */}



          {/* LANGUAGE */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
