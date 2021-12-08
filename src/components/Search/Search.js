import React from "react";
import "./Search.scss";
import search from "bootstrap-icons/icons/search.svg";

const Search = () => (
  <div className="container searchbar start-50 translate-middle-x">
    <div className="row align-items-center">
      <div class="col-lg-6 mx-auto">
        <form action="/" method="get">
          <div className="d-flex input-group">
            <label htmlFor="header-search">
              <span className="visually-hidden1">Search blog posts</span>
            </label>
            <input
            
              className="form-control searchfield rounded-pill-left border-right-0 shadow-none"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <span class="input-group-append">
              <button
                className="btn btn-secondary shadow-none border rounded-pill-right border-left-0"
                type="submit"
              >
                <img src={search} class="search-icon"></img>
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Search;
