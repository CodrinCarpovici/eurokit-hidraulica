import React from "react";
import "./Language.scss";

import globe from "bootstrap-icons/icons/globe.svg";

const Language = () => {
  return (
    <div className="dropdown language d-inline-block">
      <a
        className="btn btn-info dropdown-toggle language top-right-link-2"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={globe}></img>
      </a>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
          <a className="dropdown-item" href="#">
            English
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Romana
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Language;
