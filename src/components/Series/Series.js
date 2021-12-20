import React from "react";
import "./Series.scss";

//Table Generator
import TableGenerator from "./TableGenerator.js";
import TableGenerator2 from "./TableGenerator2.js";

//Data Imports
import pageData from "./pageData.js";



const filteredIDmap = pageData.map(item => item.id);


//FIX DDDIIIISSSSS

const Series = ({
  title,
  headerImage,
  description,
  componentsImage,
  pressureImage,
  pos
}) => {
  const filteredID = filteredIDmap[pos]
  return (
    <div id="series">
      <div className="series-wrapper text-center">
        <div className="img-wrapper">
          <img className="image" src={headerImage} alt="title"></img>
        </div>

        <h2 className="header text-center">{title}</h2>

        <div className="row">
          <div className="col series-text text-start">
            <ul>
              {description.map((description) => (
                <li key={description.id}>{description.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="sub-header text-center">Product Information</h2>
        <div className="row table-container table-responsive ">
          <TableGenerator2 targetID={filteredID} />
        </div>

        <h2 className="sub-header text-center">Components Dimensions</h2>

        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="img-container">
              <img className="table-img" src={componentsImage}></img>
            </div>
          </div>
          <div className="col-lg-6 col-xm-12 d-flex justify-content-end">
            <div className="table-container table-responsive ">
              <TableGenerator targetID={filteredID} />
            </div>
          </div>
        </div>

        <h2 className="sub-header text-center">Pressure</h2>

        <div className="img-container">
          <img className="table-img-2" src={pressureImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Series;
