import React from "react";
import Accessory from "./Accessory.js";
import data from "./AccessoryData.js";

const nutsKit = () => {
  return (
    <div>
      {data
        .filter((item) => item.id == 7)
        .map((item) => (
          <Accessory {...item.value} key={item.value} />
        ))}
    </div>
  );
};

export default nutsKit;
