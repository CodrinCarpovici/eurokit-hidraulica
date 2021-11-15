import React from "react";

import "./Home.scss";

//COMPONENTS
import Header from "../Header/Header";

//ASSETS
import truck2 from "../../assets/img/truck2.jpg";
import home1 from "../../assets/img/home1.jpg";
import truck3 from "../../assets/img/truck3.jpeg";

const Home = () => {
  return (
    <div className="position-relative" id="home">
      <Header />
      <div
        id="carouselExampleCaptions"
        className="carousel slide d-flex flex-grow-1"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={home1}
              className="d-block w-100 slide-image"
              alt="..."
            ></img>
            <div id="overlay"></div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={truck2}
              className="d-block w-100 slide-image"
              alt="..."
            ></img>
            <div id="overlay"></div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={truck3}
              className="d-block w-100 slide-image"
              alt="..."
            ></img>
            <div id="overlay"></div>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
      
    </div>
  );
};

export default Home;
