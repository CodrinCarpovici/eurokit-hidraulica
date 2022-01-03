import React from 'react'
import "./Accessory.scss"

const Accessory = ({
    title,
    headerImage,
    diagramImage
  }) => {
    return (
      <div id="accessory">
        <div className="accessory-wrapper text-center">
          <div className="img-wrapper">
            <img className="image" src={headerImage} alt="title"></img>
          </div>
  
          <h2 className="header text-center">{title}</h2>
  
          <div className="d-img-wrapper">
            <img className="image" src={diagramImage} alt="title"></img>
          </div>
        </div>
      </div>
    );
  };

export default Accessory
