import React from "react";
import "./Search.scss";
import search from "bootstrap-icons/icons/search.svg";

const Search = () => (
  <div className="d-inline-block d-flex justify-content-end">
    <form className="navbar-form d-flex top-right-link" role="search">
      <div className="input-group col-md-12">
        <input
          type="text"
          className="search-query form-control"
          placeholder="Search"
          aria-label="Search"
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="button">
            <img src={search}></img>
          </button>
        </span>
      </div>
    </form>
  </div>
);

export default Search;
