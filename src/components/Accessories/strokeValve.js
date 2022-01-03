import React from "react";
import Accessory from "./Accessory.js";
import data from "./AccessoryData.js";

const strokeValve = () => {
  return (
    <div>
      {data
        .filter((item) => item.id == 4)
        .map((item) => (
          <Accessory {...item.value} key={item.value} />
        ))}
    </div>
  );
};

export default strokeValve;
