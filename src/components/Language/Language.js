import React from "react";
import "./Language.scss";
import { useTranslation } from "react-i18next";

import globe from "bootstrap-icons/icons/globe.svg";

const Language = () => {

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="dropdown language d-inline-block ">
      <a
        className="btn btn-info dropdown-toggle language top-right-link-2"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img className="globe" src={globe}></img>
      </a>

      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuLink"
      >
        <li>
          <button className="dropdown-item" onClick={() => handleClick('ro')}>
            Română
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => handleClick('en')}>
            English
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Language;
