import React from "react";
import Accessory from "./Accessory.js";
import data from "./AccessoryData.js";

const directionalHydraulicValve = () => {
  return (
    <div>
      {data
        .filter((item) => item.id == 6)
        .map((item) => (
          <Accessory {...item.value} key={item.value} />
        ))}
    </div>
  );
};

export default directionalHydraulicValve;
